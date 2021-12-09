module.exports = {
  verbose: true,                  // default false and true in case of single test file.
  collectCoverage: true,          // default false
  collectCoverageFrom: [          // default undefined
    // "src/**"
    // "**/*.{js,jsx}",
    // "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: [   // default: ["/node_modules/"]
    // "src",
    "/node_modules/"
  ],
  testPathIgnorePatterns: [       // default: ["/node_modules/"]
    // "src"
    "/node_modules/"
  ],
  testMatch: [  // default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
    "**/?(*.)+(spec|test).js"
  ]
};
