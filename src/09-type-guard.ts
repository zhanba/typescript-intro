function f(sn: string | null): string {
  if (sn == null) {
    return 'default'
  } else {
    return sn // ? -> string
  }
}
