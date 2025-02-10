import { Api } from "./api";
// Export all types from the API
export * from "./api";

export interface TapestryConfig {
  apiKey: string;
  baseURL?: string;
}

// Create a wrapper class to handle API key configuration
export class TapestryClient {
  /**
   * Direct access to the underlying API client.
   * Use this for advanced use cases or accessing methods not yet wrapped by the SDK.
   */
  public readonly api: Api<unknown>;
  private readonly apiKey: string;

  constructor(config: TapestryConfig) {
    this.apiKey = config.apiKey;
    this.api = new Api({
      baseURL: config.baseURL || "https://api.usetapestry.dev",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Profile methods
  async createProfile(
    params: Omit<
      Parameters<typeof this.api.profiles.findOrCreateCreate>[1],
      "apiKey"
    >,
  ) {
    return this.api.profiles.findOrCreateCreate(
      { apiKey: this.apiKey },
      params,
    );
  }

  async getProfile(id: string) {
    return this.api.profiles.profilesDetail({ apiKey: this.apiKey, id });
  }

  async updateProfile(
    id: string,
    params: Parameters<typeof this.api.profiles.profilesUpdate>[1],
  ) {
    return this.api.profiles.profilesUpdate(
      { apiKey: this.apiKey, id },
      params,
    );
  }

  // Follow methods
  async followUser(startId: string, endId: string) {
    return this.api.followers.postFollowers(
      { apiKey: this.apiKey },
      { startId, endId },
    );
  }

  async unfollowUser(startId: string, endId: string) {
    return this.api.followers.removeCreate(
      { apiKey: this.apiKey },
      { startId, endId },
    );
  }

  async isFollowing(startId: string, endId: string) {
    return this.api.followers.stateList({
      apiKey: this.apiKey,
      startId,
      endId,
    });
  }

  // Content methods
  async createContent(
    params: Parameters<typeof this.api.contents.findOrCreateCreate>[1],
  ) {
    return this.api.contents.findOrCreateCreate(
      { apiKey: this.apiKey },
      params,
    );
  }

  async getContent(id: string) {
    return this.api.contents.contentsDetail({ apiKey: this.apiKey, id });
  }

  // Comment methods
  async createComment(
    params: Parameters<typeof this.api.comments.commentsCreate>[1],
  ) {
    return this.api.comments.commentsCreate({ apiKey: this.apiKey }, params);
  }

  async getComment(id: string) {
    return this.api.comments.commentsDetail({ apiKey: this.apiKey, id });
  }

  // Like methods
  async likeContent(nodeId: string, startId: string) {
    return this.api.likes.likesCreate(
      { apiKey: this.apiKey, nodeId },
      { startId },
    );
  }

  async unlikeContent(nodeId: string, startId: string) {
    return this.api.likes.likesDelete(
      { apiKey: this.apiKey, nodeId },
      { startId },
    );
  }

  // Search methods
  async searchProfiles(query: string) {
    return this.api.search.profilesList({
      apiKey: this.apiKey,
      query,
    });
  }

  // Activity methods
  async getActivityFeed(username: string) {
    return this.api.activity.feedDetail({
      apiKey: this.apiKey,
      username,
    });
  }
}

// Export the wrapper class as the main interface
export default TapestryClient;

const client = new TapestryClient({
  apiKey: "your_api_key",
});
