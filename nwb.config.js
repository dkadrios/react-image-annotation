const path = require('path')
const crypto = require("crypto")
const crypto_orig_createHash = crypto.createHash
crypto.createHash = algorithm => crypto_orig_createHash(algorithm === "md4" ? "sha256" : algorithm)

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactImageAnnotation',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    html: {
      template: 'demo/src/index.html'
    },
    extra: {
      module: {
        rules: [
          {test: /\.txt/, loader: 'raw-loader'}
        ]
      }
    }
  },
  karma: {
    testContext: 'tests/index.test.js'
  }
}
