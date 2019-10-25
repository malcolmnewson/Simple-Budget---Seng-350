// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
      "./tests/",
      "./src/"
  ],
  collectCoverageFrom: [
      "**/src/**/*.ts"
  ]
};