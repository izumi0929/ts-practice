// import { createInterface } from 'readline'

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question('Input strings:', (line) => {
//   const result = BigInt(line)
//   console.log(`You input ${result}`)
//   rl.close()
// })
let fizbuzz = ''
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizbuzz += 'FizzBuzz '
  } else if (i % 3 === 0) {
    fizbuzz += 'Fizz '
  } else if (i % 5 === 0) {
    fizbuzz += 'Buzz '
  } else {
    fizbuzz += i + ' '
  }
}
console.log(fizbuzz)
