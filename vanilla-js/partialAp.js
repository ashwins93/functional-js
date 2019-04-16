const logger = namespace => (...args) =>
  console.log.apply(null, [namespace, ...args])

module.exports = logger
