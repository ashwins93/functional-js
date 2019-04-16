const filter = predicate => arr => arr.filter(predicate)
const map = func => arr => arr.map(func)
const pick = prop => obj => obj[prop]
const length = x => x.length
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
const foldl = binFunc => initArg => arr => arr.reduce(binFunc, initArg)
const flip = f => x => y => f(y)(x)
const evolve = obj => prop => val => ({ ...obj, [prop]: val })
const head = arr => arr[0]
const tail = arr => arr.slice(1)
// ---

const reduce = (arr, fn, init) => {
  if(length(arr) < 1) return init

  if(length(arr) === 1) return fn(init, head(arr))

  return reduce(tail(arr), fn, fn(init, head(arr)))
}

module.exports = reduce
