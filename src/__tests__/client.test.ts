import TapestryClient from '../index';

describe('TapestryClient', () => {
  let client: TapestryClient;

  beforeEach(() => {
    client = new TapestryClient({
      apiKey: 'test-api-key',
      debug: true,
    });
  });

  it('should initialize with correct configuration', () => {
    expect(client).toBeDefined();
    expect(client.instance.defaults.baseURL).toBe('https://api.usetapestry.dev/api/v1');
  });

  it('should have all required endpoints', () => {
    expect(client.profiles).toBeDefined();
    expect(client.followers).toBeDefined();
    expect(client.contents).toBeDefined();
    expect(client.comments).toBeDefined();
    expect(client.likes).toBeDefined();
    expect(client.wallets).toBeDefined();
    expect(client.search).toBeDefined();
    expect(client.notifications).toBeDefined();
    expect(client.activity).toBeDefined();
    expect(client.identities).toBeDefined();
  });

  // Add more test cases as needed
});
