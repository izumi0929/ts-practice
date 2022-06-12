import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__filename)
console.log({ __dirName })
const uhyoPath = path.join(__dirName, '../uhyo.txt')
console.log({ uhyoPath })

const data = await readFile(uhyoPath, { encoding: 'utf8' })

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
