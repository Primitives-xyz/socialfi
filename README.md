# Tapestry Social SDK

A TypeScript/JavaScript SDK for interacting with the Tapestry Social API. Build social features into your app with ease.

## Features

- 🔑 **Profile Management**: Create, update, and manage user profiles with support for wallet addresses and phone numbers
- 👥 **Social Graph**: Handle follows/unfollows and social relationships
- 💬 **Content & Comments**: Manage user-generated content and interactions
- ❤️ **Likes**: Handle social engagement through likes
- 🔍 **Search**: Search for profiles and content
- 📱 **Notifications**: Send notifications to users (wallet notifications supported)
- 📊 **Activity Feed**: Get user activity feeds including follows, content, likes, comments, and new followers
- 💱 **Swap Activity**: Track swap transactions from followed wallets or specific tokens
- 🔓 **Direct API Access**: Access the underlying API client for advanced use cases
- 🎯 **Identity Resolution**: Find associated profiles across namespaces using phone numbers or wallet addresses
- 🛠️ **Debug Mode**: Optional debug logging for API calls

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
import TapestryClient from 'socialfi';

// Initialize the client with your API key
const client = new TapestryClient({
  apiKey: 'YOUR_API_KEY',
  // Optional: override the base URL
  baseURL: 'https://api.usetapestry.dev/api/v1',
  // Optional: enable debug mode for API call logging
  debug: false,
});

// Example: Create a profile
async function createProfile() {
  try {
    const profile = await client.createProfile({
      username: 'johndoe',
      walletAddress: 'YOUR_WALLET_ADDRESS', // Optional
      phoneNumber: '+1234567890', // Optional
      bio: 'Hello, World!',
      image: 'https://example.com/avatar.jpg',
      properties: [
        // Optional custom properties
        { key: 'twitter', value: '@johndoe' },
      ],
    });
    console.log('Profile created:', profile);
  } catch (error) {
    console.error('Error creating profile:', error);
  }
}

// Example: Follow a user
async function followUser() {
  try {
    await client.followUser('YOUR_PROFILE_ID', 'TARGET_PROFILE_ID');
    console.log('Successfully followed user');
  } catch (error) {
    console.error('Error following user:', error);
  }
}

// Example: Get user's followers
async function getFollowers(profileId: string) {
  try {
    const followers = await client.getProfile(profileId);
    console.log('Profile details:', followers);
  } catch (error) {
    console.error('Error getting followers:', error);
  }
}

// Advanced: Direct API access
async function advancedUsage() {
  // Access any API endpoint directly, even if not wrapped by the SDK
  const result = await client.api.profiles.profilesList({
    page: '1',
    pageSize: '20',
    sortBy: 'created_at',
    sortDirection: 'DESC',
  });
}
```

## API Documentation

### Configuration

The `TapestryClient` constructor accepts the following configuration options:

```typescript
interface TapestryConfig {
  apiKey: string; // Required: Your Tapestry API key
  baseURL?: string; // Optional: Override the default API URL
  debug?: boolean; // Optional: Enable debug logging
}
```

### Profile Management

```typescript
// Create a profile
const profile = await client.createProfile({
  username: 'username',
  walletAddress: 'address', // Optional
  phoneNumber: '+1234567890', // Optional
  bio: 'bio',
  image: 'image_url',
  properties: [
    // Optional custom properties
    { key: 'custom_field', value: 'value' },
  ],
});

// Update a profile
const updatedProfile = await client.updateProfile('profile_id', {
  username: 'new_username',
  bio: 'new_bio',
  properties: [{ key: 'updated_field', value: 'new_value' }],
});

// Get profile details
const profileDetails = await client.getProfile('profile_id');

// Find profiles by identity
const identityProfiles = await client.api.identities.identitiesDetail({
  id: 'wallet_address_or_phone',
});
```

### Social Graph

```typescript
// Follow a user
await client.followUser('follower_id', 'target_id');

// Unfollow a user
await client.unfollowUser('follower_id', 'target_id');

// Check if following
const isFollowing = await client.isFollowing('user_id', 'target_id');

// Get social counts for a wallet
const socialCounts = await client.api.wallets.socialCountsDetail({
  address: 'wallet_address',
});
```

### Content & Interactions

```typescript
// Create content
const content = await client.createContent({
  id: 'content_id',
  profileId: 'author_id',
  properties: [
    { key: 'content_type', value: 'post' },
    { key: 'text', value: 'Hello world!' },
  ],
});

// Add a comment
const comment = await client.createComment({
  contentId: 'content_id',
  profileId: 'author_id',
  text: 'Great post!',
  properties: [{ key: 'visibility', value: 'public' }],
});

// Like content
await client.likeContent('content_id', 'user_id');

// Unlike content
await client.unlikeContent('content_id', 'user_id');

// Get content details
const contentDetails = await client.getContent('content_id');
```

### Search & Activity

```typescript
// Search for profiles
const searchResults = await client.searchProfiles('search query');

// Get activity feed
const activityFeed = await client.getActivityFeed('username');

// Get swap activity
const swapActivity = await client.api.activity.swapList({
  profileId: 'user_id',
  tokenAddress: 'token_address', // Optional
});
```

### Notifications

```typescript
// Send a wallet notification
await client.api.notifications.notificationsCreate(
  {},
  {
    recipient: 'wallet_address',
    title: 'New Message',
    body: 'You have a new message!',
    data: {
      type: 'message',
      messageId: '123',
    },
  },
);
```

### Advanced Usage: Direct API Access

For advanced use cases or accessing API endpoints not yet wrapped by the SDK, you can use the underlying API client directly:

```typescript
// Access the underlying API client
const { api } = client;

// Use any API endpoint directly
const profiles = await api.profiles.profilesList({
  page: '1',
  pageSize: '20',
  sortBy: 'created_at',
  sortDirection: 'DESC',
});

// Batch operations
const batchResults = await api.contents.batchReadCreate({}, ['content_id_1', 'content_id_2']);

// Complex queries with custom properties
const searchResults = await api.search.profilesList({
  query: 'search term',
  includeExternalProfiles: 'true',
  page: '1',
  pageSize: '50',
});
```

## Error Handling

The SDK uses Axios for HTTP requests. All API calls can throw errors that should be handled appropriately:

```typescript
try {
  const result = await client.getProfile('profile_id');
} catch (error) {
  if (axios.isAxiosError(error)) {
    // Handle API errors
    console.error('API Error:', error.response?.data);
    // Check specific error codes
    if (error.response?.status === 404) {
      console.error('Profile not found');
    }
  } else {
    // Handle other errors
    console.error('Unknown error:', error);
  }
}
```

## TypeScript Support

This SDK is written in TypeScript and provides comprehensive type definitions for all API responses and parameters. Import types directly:

```typescript
import TapestryClient, {
  // Profile types
  ProfileSchema,
  FindOrCreateProfileSchema,
  UpdateProfileSchema,

  // Content types
  ContentSchema,
  FindOrCreateContentSchema,

  // Comment types
  CreateCommentSchema,

  // Social types
  CreateFollowSchema,

  // Activity types
  FeedDetailData,

  // Search types
  SearchProfilesResponseSchema,

  // Common types
  CustomPropertySchema,
  TapestryConfig,
} from 'socialfi';
```

## Best Practices

1. **API Key Security**: Never expose your API key in client-side code. Use environment variables and server-side authentication.

2. **Error Handling**: Always implement proper error handling for API calls.

3. **Rate Limiting**: Be mindful of API rate limits and implement appropriate retry logic.

4. **Custom Properties**: Use custom properties to extend functionality while maintaining compatibility.

5. **Debug Mode**: Enable debug mode during development to log API calls for troubleshooting.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- Documentation: [Tapestry Documentation](https://docs.usetapestry.dev)
- Issues: [GitHub Issues](https://github.com/yourusername/socialfi/issues)
- Email: support@usetapestry.dev

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
