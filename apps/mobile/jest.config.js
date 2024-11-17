module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      'node_modules/(?!expo-modules-core|@react-native|react-native|react-navigation)/',
    ],
  };
  