const filter = predicate => arr => arr.filter(predicate)
const map = func => arr => arr.map(func)
const pick = prop => obj => obj[prop]
const length = str => str.length
const lt = op2 => op1 => op1 < op2
const eq = op2 => op1 => op1 === op2
const compose = (...funcs) => arg => {
  let acc = arg

  for(let i = funcs.length - 1; i >= 0; i--) {
    acc = funcs[i](acc)
  }

  return acc
}
const every = predicate => arr => arr.every(predicate)
const some = predicate => arr => arr.some(predicate)


const checkValidUsers = goodUsers =>  {
  const isGoodUser = x => some(
    compose(eq(x), pick('id'))
  )(goodUsers)

  return every(
    compose(isGoodUser, pick('id'))
  )
}

module.exports = checkValidUsers
