import { TShapeModel } from '../../types'

export enum ShapeType {
  I = 'I',
  J = 'J',
  L = 'L',
  O = 'O',
  S = 'S',
  T = 'T',
  Z = 'Z',
}
export const SHAPE_MODEL: { [key in ShapeType]: TShapeModel } = {
  I: [
    ['', 'I', '', ''],
    ['', 'I', '', ''],
    ['', 'I', '', ''],
    ['', 'I', '', ''],
  ],
  J: [
    ['', 'J', ''],
    ['', 'J', ''],
    ['J', 'J', ''],
  ],
  L: [
    ['', 'L', ''],
    ['', 'L', ''],
    ['', 'L', 'L'],
  ],
  O: [
    ['O', 'O'],
    ['O', 'O'],
  ],
  S: [
    ['', '', ''],
    ['', 'S', 'S'],
    ['S', 'S', ''],
  ],
  T: [
    ['', '', ''],
    ['T', 'T', 'T'],
    ['', 'T', ''],
  ],
  Z: [
    ['', '', ''],
    ['Z', 'Z', ''],
    ['', 'Z', 'Z'],
  ],
}
