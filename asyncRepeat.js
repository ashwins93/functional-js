const repeat = (operation, num) => {
  setTimeout(() => {
    if(num > 0) {
      operation()
      return setTimeout(() => repeat(operation, num - 1), 0)
    }
    return operation()
  }, 0)
}

module.exports = repeat
