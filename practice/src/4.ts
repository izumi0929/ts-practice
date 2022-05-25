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

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i)
  console.log(message)
}
