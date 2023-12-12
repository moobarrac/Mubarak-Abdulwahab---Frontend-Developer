module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(gif|jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
