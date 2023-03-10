import { TShapeModel } from '../../types'

export function getRotatedState(model: TShapeModel): TShapeModel {
  return model[0].map((_, colIndex) => model.map((row) => row[colIndex]).reverse())
}
