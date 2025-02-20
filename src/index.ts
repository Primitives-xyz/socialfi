import { Api } from './api';
// Export all types from the API
export * from './api';

export interface TapestryConfig {
  apiKey: string;
  baseURL?: string;
  debug?: boolean;
}

// Create a client that automatically injects the API key and handles pagination parameter types
export class TapestryClient extends Api<unknown> {
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

// Export both as default and named export
export { TapestryClient as default };
