export default {
    preset: "ts-jest",
    testEnvironment: "@happy-dom/jest-environment",
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: ['<rootDir>/tests/setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup-jest.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.app.json'
            }
        ]
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less)$": "<rootDir>/assets/css/__mocks__/styleMock.js"
    },
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/routeTree.gen.ts'],
    coverageReporters: ['json-summary', 'text', 'html'],
}
