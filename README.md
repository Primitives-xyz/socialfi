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
import { SocialFi } from 'socialfi';

// const API_URL = 'https://api.usetapestry.dev/v1/'; // tapestry prod URL
const API_URL = 'https://api.dev.usetapestry.dev/v1/'; // tapestry dev URL

const API_KEY = process.env.TAPESTRY_API_KEY; // Get you API key from https://app.usetapestry.dev/

const client = new SocialFi({
  baseURL: API_URL,
});

// Example: Create a profile
async function createProfile() {
  try {
    const profile = await client.profiles.findOrCreateCreate(
      {
        apiKey: API_KEY, 
      },
      {
        walletAddress: 'YOUR_WALLET_ADDRESS',
        username: 'johndoe',
        bio: 'Hello World!',
        blockchain: 'SOLANA',
      },
    );
    console.log('Profile created:', profile);
  } catch (error) {
    console.error('Error creating profile:', error);
  }
}

// Example: Follow a user
async function followUser() {
  try {
    await client.followers.postFollowers(
      {
        apiKey: API_KEY,
      },
      {
        startId: 'YOUR PROFILE ID',
        endId: 'ANOTHER PROFILE ID',
      },
    );
    console.log('Successfully followed user');
  } catch (error) {
    console.error('Error following user:', error);
  }
}
```

## API Documentation

### Configuration

The `TapestryClient` constructor accepts the following configuration options:

```typescript
interface SocialFi {
  baseURL?: string; // Optional: Override the default API URL
  apiKey?: string;  // Optional: Your Tapestry API key
  debug?: boolean;  // Optional: Enable debug logging
}
```

## TypeScript Support

This SDK is written in TypeScript and provides comprehensive type definitions for all API responses and parameters. Import types directly:

```typescript
import  {
  SocialFi,

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


  // Search types
  SearchProfilesResponseSchema,

  // Common types
  CustomPropertySchema,

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
