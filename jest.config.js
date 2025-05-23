/** @type {import('jest').Config} **/
module.exports = {
  preset: 'ts-jest',   // Use ts-jest to handle TypeScript files
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files using ts-jest
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ts-jest)',   // Ensure ts-jest files are transformed even if they are in node_modules
  ],
};
