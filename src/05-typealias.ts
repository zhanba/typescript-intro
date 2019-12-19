type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// Type Constructor 类型构造器, 主要 type alias 和 interface
// 对类型进行编程

/**
 * 取tuple的第一个元素类型
 */
type Head<T extends any[]> = T[0] // lookup type

function test2(...args: [string, number, boolean]) {
  return true
}

type ArgsHead = Head<Parameters<typeof test2>> // 结果为string

/**
 * 取tuple的长度
 */
type Length<T extends any[]> = T['length']

/**
 * 取tuple的最后元素类型
 */
type Tail<T extends any[]> = T[Length<T> - 1]

type TailType = Tail<Parameters<typeof test2>>

/**
 * 取函数参数的长度
 */
type FnLength<T extends (...args: any) => any> = Length<Parameters<T>>

type L = FnLength<typeof test2>
