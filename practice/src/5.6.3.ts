export {}

const createUser = (name: string, age: number) => {
  if (name === '') {
    throw Error('Name is required')
  }
  return (message: string) => `${name} (${age}) 「${message}」`
}

const getMessage = createUser('ufyo', 24)

// "uhyo (26) 「こんにちは」" と表示される
console.log(getMessage('こんにちは'))
