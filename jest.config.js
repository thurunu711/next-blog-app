const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
  },
  testMatch: ["<rootDir>/__tests__/**/*.(test|spec).js"], // Ensure Jest looks in __tests__ folder
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
