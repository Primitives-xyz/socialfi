import { SocialFi } from '../api';

const BASE_URL = 'https://api.fortests.dev/api/v1';

describe('TapestryClient Profiles', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('findOrCreateCreate', () => {
    it('should call the API with correct parameters and return the profile', async () => {
      // Mock the fetch response with proper Response object
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(
          new Response(
            JSON.stringify({
              profile: {
                id: 'test-id',
                namespace: 'test-namespace',
                created_at: Date.now(),
                username: 'test-profile-a',
              },
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            },
          ),
        ),
      );

      const client = new SocialFi({
        baseUrl: BASE_URL,
      });

      const apiKey = 'test-api-key';
      const profileData = {
        username: 'test-profile-a',
      };

      const result = await client.profiles.findOrCreateCreate({ apiKey }, profileData);

      // Verify the API was called with correct parameters
      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}/profiles/findOrCreate?apiKey=test-api-key`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(profileData),
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
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
