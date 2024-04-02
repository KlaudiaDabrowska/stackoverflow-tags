import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.polyfills.js"],
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};

export default createJestConfig(config);
