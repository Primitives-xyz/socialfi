# Tapestry Social SDK

A TypeScript/JavaScript SDK for interacting with the Tapestry Social API. Build social features into your app with ease.

## Installation

```bash
npm install socialfi
# or
yarn add socialfi
# or
pnpm add socialfi
```

## Quick Start

```typescript
import TapestryClient from "socialfi";

// Initialize the client with your API key
const client = new TapestryClient({
  apiKey: "YOUR_API_KEY",
  // Optional: override the base URL
  // baseURL: "https://api.usetapestry.dev"
});

// Example: Create a profile
async function createProfile() {
  try {
    const profile = await client.createProfile({
      username: "johndoe",
      walletAddress: "YOUR_WALLET_ADDRESS",
      bio: "Hello, World!",
    });
    console.log("Profile created:", profile);
  } catch (error) {
    console.error("Error creating profile:", error);
  }
}

// Example: Follow a user
async function followUser() {
  try {
    await client.followUser("YOUR_PROFILE_ID", "TARGET_PROFILE_ID");
    console.log("Successfully followed user");
  } catch (error) {
    console.error("Error following user:", error);
  }
}

// Example: Get user's followers
async function getFollowers(profileId: string) {
  try {
    const followers = await client.getProfile(profileId);
    console.log("Profile details:", followers);
  } catch (error) {
    console.error("Error getting followers:", error);
  }
}

// Advanced: Direct API access
async function advancedUsage() {
  // Access any API endpoint directly, even if not wrapped by the SDK
  const result = await client.api.profiles.profilesList({
    apiKey: client.apiKey,
    page: "1",
    pageSize: "20",
    sortBy: "created_at",
    sortDirection: "DESC",
  });
}
```

## Features

- 🔑 **Profile Management**: Create, update, and manage user profiles
- 👥 **Social Graph**: Handle follows/unfollows and social relationships
- 💬 **Content & Comments**: Manage user-generated content and interactions
- ❤️ **Likes**: Handle social engagement through likes
- 🔍 **Search**: Search for profiles and content
- 📱 **Notifications**: Send notifications to users
- 📊 **Activity Feed**: Get user activity feeds
- 🔓 **Direct API Access**: Access the underlying API client for advanced use cases

## API Documentation

### Profile Management

```typescript
// Create a profile
const profile = await client.createProfile({
  username: "username",
  walletAddress: "address",
  bio: "bio",
  image: "image_url",
});

// Update a profile
const updatedProfile = await client.updateProfile("profile_id", {
  username: "new_username",
  bio: "new_bio",
});

// Get profile details
const profileDetails = await client.getProfile("profile_id");
```

### Social Graph

```typescript
// Follow a user
await client.followUser("follower_id", "target_id");

// Unfollow a user
await client.unfollowUser("follower_id", "target_id");

// Check if following
const isFollowing = await client.isFollowing("user_id", "target_id");
```

### Content & Interactions

```typescript
// Create content
const content = await client.createContent({
  id: "content_id",
  profileId: "author_id",
});

// Add a comment
const comment = await client.createComment({
  contentId: "content_id",
  profileId: "author_id",
  text: "Great post!",
});

// Like content
await client.likeContent("content_id", "user_id");

// Unlike content
await client.unlikeContent("content_id", "user_id");
```

### Search & Activity

```typescript
// Search for profiles
const searchResults = await client.searchProfiles("search query");

// Get activity feed
const activityFeed = await client.getActivityFeed("username");
```

### Advanced Usage: Direct API Access

For advanced use cases or accessing API endpoints not yet wrapped by the SDK, you can use the underlying API client directly:

```typescript
// Access the underlying API client
const { api } = client;

// Use any API endpoint directly
const profiles = await api.profiles.profilesList({
  apiKey: "YOUR_API_KEY",
  page: "1",
  pageSize: "20",
  sortBy: "created_at",
  sortDirection: "DESC",
});

// Batch operations
const batchResults = await api.contents.batchReadCreate(
  { apiKey: "YOUR_API_KEY" },
  ["content_id_1", "content_id_2"]
);

// Complex queries
const searchResults = await api.search.profilesList({
  apiKey: "YOUR_API_KEY",
  query: "search term",
  includeExternalProfiles: "true",
  page: "1",
  pageSize: "50",
});
```

## TypeScript Support

This SDK is written in TypeScript and provides full type definitions for all API responses and parameters. You can import and use the types directly:

```typescript
import TapestryClient, {
  // Profile types
  ProfileSchema,
  FindOrCreateProfileSchema,
  UpdateProfileSchema,
  GetProfileDetailsSchema,

  // Content types
  ContentSchema,
  ContentDetailsSchema,
  FindOrCreateContentSchema,

  // Comment types
  CommentSchema,
  CommentDetailsSchema,
  CreateCommentSchema,

  // Social types
  CreateFollowSchema,
  IsFollowingSchema,

  // Activity types
  FeedDetailData,

  // Search types
  SearchProfilesResponseSchema,

  // Common types
  CustomPropertySchema,
  SocialInfoSchema,
  FollowCountsSchema,
} from "socialfi";

// Example usage with types
const profile: ProfileSchema = await client.getProfile("profile_id");

// Type your function parameters
function handleProfile(profile: ProfileSchema) {
  console.log(`Handling profile: ${profile.username}`);
}

// Type your response data
async function searchUsers(
  query: string
): Promise<SearchProfilesResponseSchema> {
  return client.searchProfiles(query);
}

// Using types with direct API access
async function advancedSearch(): Promise<SearchProfilesResponseSchema> {
  return client.api.search.profilesList({
    apiKey: "YOUR_API_KEY",
    query: "search term",
    includeExternalProfiles: "true",
  });
}
```

## Error Handling

The SDK uses Axios for HTTP requests. All API calls can throw errors that should be handled appropriately:

```typescript
try {
  const result = await client.getProfile("profile_id");
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error("API Error:", error.response?.data);
  } else {
    console.error("Unknown error:", error);
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For support, please visit [Tapestry Documentation](https://docs.usetapestry.dev) or contact the Tapestry team.
