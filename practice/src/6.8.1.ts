export {}

//タグ付きユニオン

type HasT<T> = {
  tag: 'hasT'
  value: T
}

type NotHasT = {
  tag: 'notHasT'
}

type Option<T> = HasT<T> | NotHasT

const logNum = (obj: Option<number>) => {
  if (obj.tag === 'hasT') {
    console.log(obj.value)
  } else {
    console.log(`it is not a number`)
  }
}

logNum({
  tag: 'hasT',
  value: 4
})

logNum({
  tag: 'notHasT'
})
