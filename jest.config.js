module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "setupFiles": [
    "<rootDir>/__test__/test-shim.js",
    "<rootDir>/__test__/test-setup.js"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleNameMapper": {
    "\\.(css)$": "jest-css-modules"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
