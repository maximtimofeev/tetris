import { CELL_PADDING, CELL_SIZE } from './constants'

export class Cell {
  private ctx: CanvasRenderingContext2D
  private _width: number
  private _height: number
  private _position: TPosition

  constructor(ctx: CanvasRenderingContext2D, position: TPosition, cellSize: number = CELL_SIZE) {
    this.ctx = ctx
    this._position = position
    this._width = cellSize
    this._height = cellSize
  }

  public get width() {
    return this._width
  }

  public get height() {
    return this._height
  }

  public draw(color: string) {
    const isFirstHorizontal = this._position[0] === 0
    const isFirstVertical = this._position[1] === 0

    const x = isFirstHorizontal ? 0 : this._position[0] * (CELL_SIZE + CELL_PADDING)
    const y = isFirstVertical ? 0 : this._position[1] * (CELL_SIZE + CELL_PADDING)

    this.ctx.moveTo(x, y)
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)
  }
}
