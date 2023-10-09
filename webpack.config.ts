const path = require('path')

module.exports ={
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: "ts-loader"
              }
            ]
          }
        ]
      },
}
