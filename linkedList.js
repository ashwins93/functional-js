const cond = (...pairs) => arg => {
  for (let [pred, fn] of pairs) {
    if (pred(arg)) {
      return fn(arg)
    }
  }
}

const emptyArray = arr => arr.length === 0
const otherwise = _ => true


const cons = x => y => [x, y]
const head = ([x, xs]) => x
const tail = ([x, xs]) => xs

const listToArray = cond(
  [emptyArray, _ => []],
  [otherwise, ([x, xs]) => [x, listToArray(xs)]]
)

const listFromArray = cond(
  [emptyArray, _ => []],
  [otherwise, (arr) =>
    cons(arr[arr.length - 1], listFromArray(arr.slice(0, arr.length - 1)))
  ]
)

const listElem = val => cond(
  [emptyArray, _ => false],
  [otherwise, ([x, xs]) => x === val || listElem(val)(xs)]
)

const listLength = cond(
  [emptyArray, _ => 0],
  [otherwise, ([x, xs]) => 1 + listLength(xs)]
)

const listFoldr = f => initArg => cond(
  [emptyArray, _ => initArg],
  [otherwise, ([x, xs]) => f(x)(listFoldr(f)(initArg)(xs))]
)

const listMap = f => cond(
  [emptyArray, _ => []],
  [otherwise, ([x, xs]) => cons(f(x))(listMap(f)(xs))]
)