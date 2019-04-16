const c = require('crocks')

const arrUpper = c.Arrow(str => str.toUpperCase())

const getName = c.compose(
  c.option('no name'),
  c.chain(c.safe(c.isString)),
  c.prop('name')
)

const arrUpperName = arrUpper.promap(getName, c.objOf('name'))
const multiply = c.curry((x, y) => x * y)
const divide = c.curry((x, y) => x / y)

const safeInteger = c.safe(c.isInteger)
const notZero = c.safe(c.and(c.isInteger, x => x !== 0))

const safeDivide = (x, y) => c.liftA2(divide, safeInteger(x), notZero(y))

const sumArray = c.Arrow(c.mreduce(c.Sum))

const lengthArray = c.Arrow(
  c.compose(
    c.option(0),
    c.chain(safeInteger),
    c.prop('length')
  )
)

const avgArray = sumArray
  .first()
  .compose(lengthArray.second())
  .promap(
    c.branch,
    c.merge(
      c.compose(
        c.option(0),
        safeDivide
      )
    )
  )
const negateBoth = c.Arrow(multiply(-1)).both()

module.exports = {
  arrUpperName,
  negateBoth,
  sumArray,
  lengthArray,
  avgArray,
}
