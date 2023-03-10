import { ShapeType } from '../lib/constants/shapes'

type TSize = {
  width: number
  height: number
}

type TPosition = [number, number]

type TShapeModelKey = keyof typeof ShapeType | ''

type TShapeModel = TShapeModelKey[][]

type TShapeState = {
  type: ShapeType
  model: TShapeModel
  rotation: number
}
