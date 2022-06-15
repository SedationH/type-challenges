// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// how js handle this
const MyPickJS = (T: object, K: string[]) => {
  const res = {}
  K.forEach((k) => {
    if (k in T) {
      res[k] = T[k]
    }
  })

  return res
}
