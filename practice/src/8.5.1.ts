import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__filename)
console.log({ __dirName })
const uhyoPath = path.join(__dirName, '../uhyo.txt')
console.log({ uhyoPath })

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

const errorAfter1ms = async () => {
  await sleep(1)
  throw new Error('time over yade')
}

const data = await Promise.race([
  readFile(uhyoPath, { encoding: 'utf8' }),
  errorAfter1ms()
]).catch(() => {
  return ''
})

let count = 0
let currentIndex = 0
while (true) {
  const nextIndex = data.indexOf('uhyo', currentIndex)
  if (nextIndex >= 0) {
    count++
    currentIndex = nextIndex + 1
  } else {
    break
  }
}
console.log(count)

// const sleepReject = (duration: number) => {
//   return new Promise<never>((_resolve, reject) => {
//     setTimeout(reject, duration)
//   })
// }

// try {
//   const data = Promise.race([
//     await readFile(uhyoPath, { encoding: 'utf8' }),
//     sleepReject(1)
//   ])
//   data.then((result) => {
//     let count = 0
//     let currentIndex = 0
//     while (true) {
//       const nextIndex = result.indexOf('uhyo', currentIndex)
//       if (nextIndex >= 0) {
//         count++
//         currentIndex = nextIndex + 1
//       } else {
//         break
//       }
//     }
//     console.log(count)
//   })
// } catch (e) {
//   console.log('time over', e)
// }

// readFile(uhyoPath, 'utf8', (err, data) => {
//   if (err) {
//     console.log('error occured', err)
//     return
//   }
//   let count = 0
//   let currentIndex = 0
//   while (true) {
//     const nextIndex = data.indexOf('uhyo', currentIndex)
//     if (nextIndex >= 0) {
//       count++
//       currentIndex = nextIndex + 1
//     } else {
//       break
//     }
//   }
//   console.log(count)
// })
