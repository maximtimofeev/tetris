import { TShapeState } from '../types'
import { App } from './App'
import { MAX_ROTATION } from './constants'
import { ShapeType, SHAPE_MODEL } from './constants/shapes'
import { getObjectKeys } from './utils/getObjectKeys'
import { getRotatedState } from './utils/getRotatedState'

export class Shape {
  private _state: TShapeState

  constructor(type: ShapeType, rotation = 0) {
    const state = {
      type,
      rotation,
      model: SHAPE_MODEL[type],
    }
    if (rotation) {
      for (let i = 0; i < rotation; i++) {
        state.model = getRotatedState(state.model)
      }
    }
    this._state = state
  }

  private get app(): App {
    return App.getInstance()
  }

  public get state(): TShapeState {
    return this._state
  }

  public static getRandom() {
    const keys = getObjectKeys(ShapeType)
    const index = Math.floor(Math.random() * keys.length)
    return new Shape(ShapeType[keys[index]], Math.floor(Math.random() * MAX_ROTATION))
  }

  public rotate() {
    const model = getRotatedState(this._state.model)
    this._state.model = model
  }

  public draw() {
    this.app.position
  }
}
