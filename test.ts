import TapestryClient from './dist'; // or from the built package path

async function testClient() {
  const client = new TapestryClient({
    apiKey: 'your-api-key',
    debug: true, // Enable debug mode to see API calls
  });

  try {
    // Test a simple API call
    const profiles = await client.profiles.get({});
    console.log('Profiles:', profiles);
  } catch (error) {
    console.error('Error:', error);
  }
}

testClient();
