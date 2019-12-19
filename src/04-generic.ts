/**
 * 查找数组的第一个元素
 * @param list
 */
function firstElementString(list: string[]) {
  return list[0]
}
function firstElementNumber(list: number[]) {
  return list[0]
}

/**
 * 使用泛型
 * @param array
 */
function head<T>(array: T[]): T {
  return array[0]
}

const first = head([1, 2, 3])

/**
 * 添加约束，bound
 * @param a
 * @param b
 */
function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}
