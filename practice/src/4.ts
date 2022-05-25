const getFizzBuzzString = (num: number) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num
  }
}

const sequence = (from: number, to: number) =>
  [...Array(to)].map((_, i) => i + from)

for (const i of sequence(1, 20)) {
  const message = getFizzBuzzString(i)
  console.log(message)
}
