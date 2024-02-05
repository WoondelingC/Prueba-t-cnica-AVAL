export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testMatch: ["**/__tests__/**/*.test.js"],
};
