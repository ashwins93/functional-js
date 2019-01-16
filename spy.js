const Spy = (target, f) => {
  const spy = { count: 0 }
  const originalFunction = target[f]

  target[f] = (...args) => {
    spy.count++
    originalFunction.apply(target, args)
  }

  return spy
}

module.exports = Spy
