import { TPosition, TShapeModel } from '../types'
import { DEFAULT_STATE, DEFAULT_TICK_DURATION } from './constants'
import { Field } from './Field'
import { Shape } from './Shape'

export class App {
  private static _instance: App = new App()

  private _field: Field
  private _position: TPosition
  private _intervalId: number | null = null
  private _actiiveShape: Shape | null = null
  private _state: TShapeModel = DEFAULT_STATE

  constructor() {
    if (App._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.')
    }
    this._field = new Field()
    this._position = [4, 0]
    App._instance = this
  }
  public static getInstance(): App {
    return App._instance
  }

  public get field(): Field {
    return this._field
  }

  public get position() {
    return this._position
  }

  public run() {
    console.log('run')
    this.field.initialize()
    this.insertShape()
    this._intervalId = setInterval(() => {}, DEFAULT_TICK_DURATION)
  }

  private insertShape() {
    this._actiiveShape = Shape.getRandom()
    this._actiiveShape.state.model.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col) {
          this._state[this._position[0] + rowIndex][this._position[1] + colIndex] = col
        }
      })
    })
    this.field.draw(this._state)
  }

  private pauseGame() {
    if (this._intervalId) {
      clearInterval(this._intervalId)
    }
  }

  private stopGame() {
    if (this._intervalId) {
      clearInterval(this._intervalId)
    }
  }
}
