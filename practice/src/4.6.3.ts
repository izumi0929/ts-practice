const map = <T, S>(array: T[], callback: (num: T) => S): S[] => {
  let n = []
  for (const i of array) {
    n.push(callback(i))
  }
  return n
}

const data = [1, 1, 2, 3, 5, 8, 13]
const result = map(data, (x) => x * 10)
console.log(result)

const data2 = [1, -3, -2, 8, 0, -1]
const result2 = map(data2, (x) => x >= 0)
console.log(result2)

export = {}
