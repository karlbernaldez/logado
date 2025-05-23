/** @type {import('jest').Config} **/
module.exports = {
  preset: 'ts-jest',             // Use ts-jest to handle TypeScript files
  testEnvironment: 'node',       // Set the test environment to Node.js
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files using ts-jest
  },
};
