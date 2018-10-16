// union type
type PathParam = string | RegExp | Array<string | RegExp>

function testPath(path: PathParam): boolean {
  if (typeof path === 'string') {
    return path.toLowerCase() === '/path'
  } else if (path instanceof RegExp) {
    return path.test('/path')
  } else {
    return path.some(testPath)
  }
  // path.length is an error
}

// test
testPath('/path')
testPath(/path/)
testPath(['path', /path/])
