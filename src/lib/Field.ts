import { TShapeModel } from '../types'
import { Cell } from './Cell'
import { COLORS, DEFAULT_STATE } from './constants'
import { CELL_PADDING, CELL_SIZE, HORIZONTAL_CELLS_COUNT, VERTICAL_CELLS_COUNT } from './constants'

export class Field {
  private _cellSize: number
  private _width: number
  private _height: number
  private _ctx: CanvasRenderingContext2D

  private _cells: Cell[][] = []

  constructor(cellSize: number = CELL_SIZE) {
    this._cellSize = cellSize
    this._width = cellSize * HORIZONTAL_CELLS_COUNT + (HORIZONTAL_CELLS_COUNT - 1) * CELL_PADDING
    this._height = cellSize * VERTICAL_CELLS_COUNT + (VERTICAL_CELLS_COUNT - 1) * CELL_PADDING

    const root = document.querySelector<HTMLDivElement>('#app')
    const canvas = document.createElement('canvas', {})
    root?.appendChild(canvas)

    canvas.width = this.width
    canvas.height = this.height
    canvas.style.width = `${this.width}px`
    canvas.style.height = `${this.height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('2d context is not supported')
    }
    this._ctx = ctx
    this.createCells()
  }

  private createCells() {
    for (let x = 0; x < HORIZONTAL_CELLS_COUNT; x++) {
      this._cells.push([])
      for (let y = 0; y < VERTICAL_CELLS_COUNT; y++) {
        this._cells[x].push(new Cell(this._ctx, [x, y]))
      }
    }
  }

  public get width(): number {
    return this._width
  }

  public get height(): number {
    return this._height
  }

  private drawBorders() {
    this._ctx.strokeStyle = COLORS.FIELD.grid
    for (let x = this._cellSize; x < this.width; x += this._cellSize + CELL_PADDING) {
      this._ctx.moveTo(x, 0)
      this._ctx.lineWidth = CELL_PADDING
      this._ctx.lineTo(x, this.height)
      this._ctx.stroke()
    }
    for (let y = this._cellSize; y < this.height; y += this._cellSize + CELL_PADDING) {
      this._ctx.moveTo(0, y)
      this._ctx.lineWidth = CELL_PADDING
      this._ctx.lineTo(this.width, y)
      this._ctx.stroke()
    }
  }

  public initialize() {
    this.drawBorders()
    this.draw(DEFAULT_STATE)
  }

  public draw(state: TShapeModel) {
    for (let x = 0; x < HORIZONTAL_CELLS_COUNT; x++) {
      for (let y = 0; y < VERTICAL_CELLS_COUNT; y++) {
        const shapeKey = state[x][y]
        this._cells[x][y].draw(shapeKey ? COLORS.CELL[shapeKey] : COLORS.CELL.E)
      }
    }
  }
}
