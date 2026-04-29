// Mock client since @base44/sdk is not installed
// If SDK is needed, run: npm install @base44/sdk

const createMockClient = (config) => {
  console.warn('Base44 SDK not configured. Using mock client.');
  return {
    query: async () => ({ data: null, error: 'SDK not configured' }),
    mutate: async () => ({ data: null, error: 'SDK not configured' }),
  };
};

export const base44 = createMockClient({
  appId: import.meta.env.VITE_BASE44_APP_ID,
  token: import.meta.env.VITE_BASE44_TOKEN,
});
