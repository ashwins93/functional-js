const repeat = (operation, num) => {
  if(num > 0) {
    operation()
    return repeat(operation, num - 1)
  }
  return operation()
}

module.exports = repeat
