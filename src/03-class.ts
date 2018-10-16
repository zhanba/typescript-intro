interface IClockInterface {
  currentTime: Date
}

class Clock implements IClockInterface {
  public currentTime: Date = new Date()
  constructor(h: number, m: number) {
    //
  }
}
