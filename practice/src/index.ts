import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input strings:', (line) => {
  const result = BigInt(line)
  console.log(`You input ${result}`)
  rl.close()
})
