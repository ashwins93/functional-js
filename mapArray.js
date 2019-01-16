const arrayMap = (arr, f) => arr.reduce((acc, x) => [...acc, f(x)], [])

module.exports = arrayMap
