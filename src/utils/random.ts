import type Sfc32 from "./sfc32"

/** min inclusive, max exclusive */
export function randomNumber(generator: Sfc32, min: number, max: number) {
  const rnd = generator.number()
  const floored = Math.floor(rnd * ((--max) - min + 1) + min)
  return floored
}
