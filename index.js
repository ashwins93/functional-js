const c = require('crocks')
const {
  arrUpperName,
  negateBoth,
  sumArray,
  lengthArray,
  avgArray,
} = require('./crocks-js/arrow')

console.log(arrUpperName.runWith({ name: 'John Doe' }))
console.log(negateBoth.runWith(c.Pair(5, -2)).toString())
console.log(sumArray.runWith([1, 2, 3]))
console.log(lengthArray.runWith([1, 2, 3]))
console.log(avgArray.runWith([1, 2, 3]))
