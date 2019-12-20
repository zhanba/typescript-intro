interface IClockInterface {
  currentTime: Date
  name: string
}

interface B {
  age: number
}

class Clock implements IClockInterface, B {
  public currentTime: Date = new Date()
  constructor(h: number, m: number) {
    //
  }
}
