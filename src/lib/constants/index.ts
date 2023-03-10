import { HORIZONTAL_CELLS_COUNT, VERTICAL_CELLS_COUNT } from './sizes'

export * from './colors'
export * from './sizes'

export const MAX_ROTATION = 4
export const DEFAULT_TICK_DURATION = 1000
export const DEFAULT_STATE = Array(HORIZONTAL_CELLS_COUNT)
  .fill('')
  .map(() => Array(VERTICAL_CELLS_COUNT).fill(''))

console.log(DEFAULT_STATE)
