// jest.config.js

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src/",
        "<rootDir>/tests/"
    ],
    collectCoverageFrom: ["**/src/daos/*.ts", "**/src/routes/*Router.ts"],
};
