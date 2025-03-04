import { SocialFi } from '../api';
import axios, { HeadersDefaults } from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const BASE_URL = 'https://api.fortests.dev/api/v1';

describe('TapestryClient Profiles', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock axios.create to return a mocked instance
    mockedAxios.create.mockReturnValue(mockedAxios);
  });

  describe('findOrCreateCreate', () => {
    it('should call the API with correct parameters and return the profile', async () => {
      // Mock axios response
      mockedAxios.request.mockResolvedValue({
        data: {
          profile: {
            id: 'test-id',
            namespace: 'test-namespace',
            created_at: Date.now(),
            username: 'test-profile-a',
          },
        },
        status: 200,
        statusText: 'OK',
        headers: { 'content-type': 'application/json' },
        config: {},
      });

      // Set up default headers that would normally be set by axios
      mockedAxios.defaults = {
        headers: {
          common: { Accept: 'application/json' },
          delete: {},
          get: {},
          head: {},
          post: { 'Content-Type': 'application/json' },
          put: { 'Content-Type': 'application/json' },
          patch: { 'Content-Type': 'application/json' },
        } as HeadersDefaults & { [key: string]: any },
      };

      const client = new SocialFi({
        baseURL: BASE_URL,
      });

      const profileData = {
        username: 'test-profile-a',
      };

      const result = await client.profiles.findOrCreateCreate(
        { apiKey: 'test-api-key' },
        profileData,
      );

      // Verify axios was called with correct parameters
      expect(mockedAxios.request).toHaveBeenCalledWith(
        expect.objectContaining({
          url: '/profiles/findOrCreate',
          method: 'POST',
          params: { apiKey: 'test-api-key' },
          data: profileData,
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          responseType: 'json',
        }),
      );

      // Verify the response
      expect(result).toEqual({
        profile: {
          id: 'test-id',
          namespace: 'test-namespace',
          created_at: expect.any(Number),
          username: 'test-profile-a',
        },
      });
    });
  });
});
