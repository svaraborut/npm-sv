// Skip the creation of the release commit for canary releases
const gitPlugin = [
    '@semantic-release/git',
    {
        message: 'bot(release): ${nextRelease.version} [skip ci]',
    },
]

export default {
    branches: [
        {
            name: 'main',
        },
        {
            name: 'canary',
            prerelease: true,
        },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        ...(process.env.GIT_COMMIT === 'true' ? [gitPlugin] : []),
        '@semantic-release/github',
    ],
}
