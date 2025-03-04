import TapestryClient from '../index';
import { Api } from '../api';

// Mock the API class
jest.mock('../api');

describe('TapestryClient Profiles', () => {
  let client: TapestryClient;
  let mockApi: jest.Mocked<Api<unknown>>;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Create a mock API instance
    mockApi = {
      profiles: {
        get: jest.fn().mockResolvedValue({
          data: [
            { id: '1', name: 'Test Profile 1' },
            { id: '2', name: 'Test Profile 2' },
          ],
          total: 2,
          page: 1,
          pageSize: 10,
        }),
      },
      // Add other required API methods with empty mocks
      followers: { get: jest.fn() },
      contents: { get: jest.fn() },
      comments: { get: jest.fn() },
      likes: { get: jest.fn() },
      wallets: { get: jest.fn() },
      search: { get: jest.fn() },
      notifications: { get: jest.fn() },
      activity: { get: jest.fn() },
      identities: { get: jest.fn() },
      request: jest.fn(),
      instance: {
        interceptors: {
          request: { use: jest.fn() },
        },
        defaults: {
          baseURL: 'https://api.usetapestry.dev/api/v1',
        },
      },
      setSecurityData: jest.fn(),
    } as unknown as jest.Mocked<Api<unknown>>;

    // Mock the Api constructor to return our mock instance
    (Api as jest.MockedClass<typeof Api>).mockImplementation(() => mockApi);

    client = new TapestryClient({
      apiKey: 'test-api-key',
      debug: true,
    });
  });

  describe('get profiles', () => {
    it('should get all profiles', async () => {
      console.log('Available profile methods:', Object.keys(client.profiles));

      // const result = await client.profiles.get({});
      const createdProfileA = await client.profiles.findOrCreateCreate(
        {},
        {
          username: 'test-profile-a',
        },
      );
      console.log('[createdProfileA]', createdProfileA);
    });
  });
});
