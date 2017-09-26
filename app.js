'use strict'

const config = require('config')
const logger = require('ilog')
const app = require('./lib/app')

app.listen(config.PORT, () => logger.info(`myapp system listen on ${config.PORT}`))
