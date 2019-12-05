// jest.config.js

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src/"
    ],
    collectCoverageFrom: ["**/src/daos/*.ts", "**/src/routes/*Router.ts"],
};
