const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
