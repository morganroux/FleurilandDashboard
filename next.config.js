const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        env: {
            serverAddress: 'http://localhost:3000',
        },
    }
  }

  return {
    env: {
        serverAddress: 'https://fleurilanddashboard.now.sh',
    },
    /* config options for all phases except development here */
  }
}