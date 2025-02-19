import { Api } from './api';
// Export all types from the API
export * from './api';

export interface TapestryConfig {
  apiKey: string;
  baseURL?: string;
  debug?: boolean;
}

// Create an API wrapper that automatically injects the API key
class AutoAuthApi extends Api<unknown> {
  private readonly debug: boolean;

  constructor(
    private readonly apiKey: string,
    config?: Omit<TapestryConfig, 'apiKey'>,
  ) {
    super({
      baseURL: config?.baseURL || 'https://api.usetapestry.dev/api/v1',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.debug = config?.debug || false;

    // Add interceptor to inject apiKey into all requests
    this.instance.interceptors.request.use((config) => {
      // Add API key to params
      config.params = {
        ...config.params,
        apiKey: this.apiKey,
      };

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

// Create a wrapper class to handle API key configuration
export class TapestryClient {
  /**
   * Direct access to the underlying API client.
   * Use this for advanced use cases or accessing methods not yet wrapped by the SDK.
   * The API key will be automatically injected into all requests.
   */
  public readonly api: AutoAuthApi;

  constructor(config: TapestryConfig) {
    this.api = new AutoAuthApi(config.apiKey, config);
  }

  // Profile methods
  async createProfile(params: Parameters<typeof this.api.profiles.findOrCreateCreate>[1]) {
    return this.api.profiles.findOrCreateCreate({}, params);
  }

  async getProfile(id: string) {
    return this.api.profiles.profilesDetail({ id });
  }

  async updateProfile(id: string, params: Parameters<typeof this.api.profiles.profilesUpdate>[1]) {
    return this.api.profiles.profilesUpdate({ id }, params);
  }

  // Follow methods
  async followUser(startId: string, endId: string) {
    return this.api.followers.postFollowers({}, { startId, endId });
  }

  async unfollowUser(startId: string, endId: string) {
    return this.api.followers.removeCreate({}, { startId, endId });
  }

  async isFollowing(startId: string, endId: string) {
    return this.api.followers.stateList({ startId, endId });
  }

  // Content methods
  async createContent(params: Parameters<typeof this.api.contents.findOrCreateCreate>[1]) {
    return this.api.contents.findOrCreateCreate({}, params);
  }

  async getContent(id: string) {
    return this.api.contents.contentsDetail({ id });
  }

  // Comment methods
  async createComment(params: Parameters<typeof this.api.comments.commentsCreate>[1]) {
    return this.api.comments.commentsCreate({}, params);
  }

  async getComment(id: string) {
    return this.api.comments.commentsDetail({ id });
  }

  // Like methods
  async likeContent(nodeId: string, startId: string) {
    return this.api.likes.likesCreate({ nodeId }, { startId });
  }

  async unlikeContent(nodeId: string, startId: string) {
    return this.api.likes.likesDelete({ nodeId }, { startId });
  }

  // Search methods
  async searchProfiles(query: string) {
    return this.api.search.profilesList({ query });
  }

  // Activity methods
  async getActivityFeed(username: string) {
    return this.api.activity.feedList({ username });
  }
}

// Export both as default and named export
export { TapestryClient as default };
