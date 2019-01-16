const filter = predicate => arr => arr.filter(predicate)

const map = func => arr => arr.map(func)

const pick = prop => obj => obj[prop]

const length = str => str.length

const lt = op2 => op1 => op1 < op2

const compose = (...funcs) => arg => {
  let acc = arg

  for(let i = funcs.length - 1; i >= 0; i--) {
    acc = funcs[i](acc)
  }

  return acc
}

const getShortMessages = compose(
  filter(compose(lt(50), length)),
  map(pick('message'))
)

module.exports = getShortMessages
// module.exports = {
//   getShortMessages,
//   filter,
//   map,
//   pick,
//   length,
//   lt,
//   compose
// }
