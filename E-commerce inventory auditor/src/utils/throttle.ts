export function throttle(fn: Function, limit: number) {

  let lastRun = 0

  return (...args: any[]) => {

    const now = Date.now()

    if (now - lastRun >= limit) {
      fn(...args)
      lastRun = now
    }

  }

}