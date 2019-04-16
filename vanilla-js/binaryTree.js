const cond = (...pairs) => arg => {
  for (let [pred, fn] of pairs) {
    if (pred(arg)) {
      return fn(arg)
    }
  }
}

const foldl = f => init => arr => arr.reduce((x, y) => f(x)(y), init)
const flip = f => x => y => f(y)(x)
const concat = (...args) => args.reduce((acc, x) => [...acc, ...x])

const isNull = arg => arg === null
const otherwise = _ => true

const BinaryTree = (x, left, right) => [x, left, right]

const treeInsert = val => cond(
  [isNull, _ => BinaryTree(x, null, null)],
  [otherwise, ([x, left, right]) => {
    switch (true) {
      case val === x:
        return BinaryTree(x, left, right)
      case val < x:
        return BinaryTree(x, treeInsert(val)(left), right)
      case val > x:
        return BinaryTree(x, left, treeInsert(val)(right))
    }
  }]
)

const treeFromArray = foldl(flip(treeInsert))(null)

const treeToArray = cond(
  [isNull, _ => []],
  [otherwise, ([x, left, right]) =>
    concat(treeToArray(left), [x], treeToArray(right))
  ]
)

const treeElem = x => cond(
  [isNull, _ => false],
  [otherwise, ([a, left, right]) => {
    switch (true) {
      case x === a:
        return true
      case x < a:
        return treeElem(x)(left)
      case x > a:
        return treeElem(x)(right)
    }
  }]

)