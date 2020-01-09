import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.3
  }

  constructor(props) {
    super(props);

    this.createBoard = this.createBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.checkSolvable = this.checkSolvable.bind(this)

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    do {
      board = []
      for (let i = 0; i < this.props.nrows; i++) {
        board[i] = [];
        for (let j = 0; j < this.props.ncols; j++) {
          board[i].push(Math.random() <= this.props.chanceLightStartsOn)
        }
      }
    } while (!this.checkSolvable(board) || this.checkWin(board))

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    let plusShape = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x)

    plusShape.forEach((direction) => {
      const cx = x + direction[0]
      const cy = y + direction[1]
      flipCell(cy, cx)
    })

    // win when every cell is turned off
    let hasWon = this.checkWin(board)
    this.setState({ board, hasWon });
  }

  checkWin(board) {
    return board.every((row) => row.every(cellVal => cellVal === false))
  }

  checkSolvable(board) {
    let qp1 = 0;
    let qp2 = 0;
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        (cell && i !== 2 && j % 2 === 0) && qp1++;
        (cell && i % 2 === 0 && j !== 2) && qp2++;
      })
    })
    return (qp1 % 2 === 1 || qp2 % 2 === 1) ? false : true;
  }


  /** Render game board or winning message. */

  render() {

    const rows = this.state.board.map((row, i) => {
      const cell = row.map((cellVal, j) => {
        let coord = `${i}-${j}`
        return (
          <Cell flipCellsAroundMe={() => this.flipCellsAround(coord)} isLit={cellVal} key={j} animation={this.state.hasWon} />
        )
      })

      return <tr key={i}>{cell}</tr>
    })
    return (
      // this.state.hasWon ?
      //   <h1> You Won! </h1> :
      //   <table className="Board">
      //     <tbody>
      //       {rows}
      //     </tbody>
      //   </table>

      <table className="Board">
        <tbody>
          {rows}
        </tbody>
      </table>

    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
