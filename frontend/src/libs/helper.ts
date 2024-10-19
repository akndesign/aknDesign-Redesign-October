export const math = {
    lerp: (start: number, end: number, t: number) => {
      return (1 - t) * start + t * end;
    },
    norm: (value: number, min: number, max: number) => {
      return (value - min) / (max - min)
    },
    clamp: (num: number, min: number, max: number) => Math.min(Math.max(num, min), max),
    map: (value: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }
  }