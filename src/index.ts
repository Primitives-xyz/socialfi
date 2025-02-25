import { Api } from './api';
// Export all types from the API
export * from './api';

export interface TapestryConfig {
  apiKey: string;
  baseURL?: string;
  debug?: boolean;
}

// Create an API wrapper that automatically injects the API key and handles pagination parameter types
class AutoAuthApi extends Api<unknown> {
  private readonly debug: boolean;
  private readonly apiKey: string;

  constructor(config: TapestryConfig) {
    super({
      baseURL: config.baseURL || 'https://api.usetapestry.dev/api/v1',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.debug = config.debug || false;
    this.apiKey = config.apiKey;

    // Add interceptor to inject apiKey into all requests
    this.instance.interceptors.request.use((config) => {
      // Add API key to params
      config.params = {
        ...config.params,
        apiKey: this.apiKey,
      };

      // Convert pagination parameters to strings for the API
      if (config.params?.page !== undefined) {
        config.params.page = String(config.params.page);
      }
      if (config.params?.pageSize !== undefined) {
        config.params.pageSize = String(config.params.pageSize);
      }

      // Only log if debug mode is enabled
      if (this.debug) {
        const url = new URL(config.url || '', config.baseURL);
        const searchParams = new URLSearchParams(config.params);
        url.search = searchParams.toString();
        console.log(`Making API call to: ${url.toString()}`);
      }

      return config;
    });
  }
}

// Helper type to extract the query parameter type from a function
type FirstParameter<T extends (...args: any) => any> = Parameters<T>[0];

// Helper type to create a wrapped API method that injects the API key
type ApiMethodWithInjectedKey<T extends (query: any, ...args: any[]) => any> = (
  query: Omit<FirstParameter<T>, 'apiKey'>,
  ...args: Parameters<T> extends [any, ...infer Rest] ? Rest : never
) => ReturnType<T>;

// Create a client that provides access to the API with automatic API key injection
export class TapestryClient {
  /**
   * Private access to the underlying API client.
   * Not exposed to users as it requires manual API key handling.
   * Use the wrapped endpoint methods instead which automatically inject the API key.
   */
  private readonly api: AutoAuthApi;
  private readonly apiKey: string;

  constructor(config: TapestryConfig) {
    this.api = new AutoAuthApi(config);
    this.apiKey = config.apiKey;
  }

  // Create proxies for all API endpoints that automatically inject the API key
  private createMethodProxy<T extends (query: any, ...args: any[]) => any>(
    method: T,
  ): ApiMethodWithInjectedKey<T> {
    return ((query: Omit<FirstParameter<T>, 'apiKey'>, ...args: any[]) => {
      // Add API key to query
      const queryWithApiKey = {
        ...query,
        apiKey: this.apiKey,
      };

      // The interceptor will handle converting pagination parameters to strings
      return method.call(this.api, queryWithApiKey, ...args);
    }) as ApiMethodWithInjectedKey<T>;
  }

  private createEndpointProxy<T extends Record<string, (...args: any[]) => any>>(
    endpoint: T,
  ): { [K in keyof T]: ApiMethodWithInjectedKey<T[K]> } {
    const proxy = {} as { [K in keyof T]: ApiMethodWithInjectedKey<T[K]> };

    for (const key in endpoint) {
      if (typeof endpoint[key] === 'function') {
        proxy[key] = this.createMethodProxy(endpoint[key]);
      }
    }

    return proxy;
  }

  // Proxy all API endpoints with automatic API key injection
  get profiles() {
    return this.createEndpointProxy(this.api.profiles);
  }

  get followers() {
    return this.createEndpointProxy(this.api.followers);
  }

  get contents() {
    return this.createEndpointProxy(this.api.contents);
  }

  get comments() {
    return this.createEndpointProxy(this.api.comments);
  }

  get likes() {
    return this.createEndpointProxy(this.api.likes);
  }

  get creators() {
    return this.createEndpointProxy(this.api.creators);
  }

  get wallets() {
    return this.createEndpointProxy(this.api.wallets);
  }

  get search() {
    return this.createEndpointProxy(this.api.search);
  }

  get notifications() {
    return this.createEndpointProxy(this.api.notifications);
  }

  get activity() {
    return this.createEndpointProxy(this.api.activity);
  }

  get identities() {
    return this.createEndpointProxy(this.api.identities);
  }

  // Forward request method to the underlying API
  request = (...args: Parameters<AutoAuthApi['request']>) => this.api.request(...args);

  // Forward instance property to the underlying API
  get instance() {
    return this.api.instance;
  }

  // Forward setSecurityData method to the underlying API
  setSecurityData = (...args: Parameters<AutoAuthApi['setSecurityData']>) =>
    this.api.setSecurityData(...args);
}

// Export both as default and named export
export { TapestryClient as default };
