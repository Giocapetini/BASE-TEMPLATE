module.exports = {
  preset: 'jest-preset-angular',
  setupFiles: [ 'jest-localstorage-mock' ],
  setupFilesAfterEnv: [ '<rootDir>/../../setupJest.ts' ],
  coverageDirectory: '<rootdir>/../coverage',
};
