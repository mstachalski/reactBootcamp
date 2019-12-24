import React, { Component } from "react";
import uuid from "uuid";
import AlphaButtons from "./AlphaButtons"
import "./Hangman.css";

import { randomWord } from "./words"
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {

  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), won: false };
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this)
    this.checkWin = this.checkWin.bind(this)
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      won: this.checkWin()
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <AlphaButtons key={uuid()} ltr={ltr} handleGuess={this.handleGuess} disabled={this.state.guessed.has(ltr) || this.state.won} />
    ));
  }

  restart() {
    this.setState({
      nWrong: 0, guessed: new Set(), answer: randomWord(), won:false
    })
  }

  checkWin(){
    let currAnswer = this.state.answer.split("").filter((ltr) => {
      return this.state.guessed.has(ltr)
    })

    console.log("current answer: " + currAnswer)

    if(currAnswer.length === this.state.answer.length) {
      return true
    }

    return false
  }

  /** render: render game */
  render() {
    console.log(this.state.answer)
    console.log(this.state.won)
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`{${this.state.nWrong} wrong guesses}`} />
        {
          this.state.won ? <p>Congratulations!</p> :         <p>Wrong guesses: {this.state.nWrong}</p>
        }

        <p className='Hangman-word'>{this.guessedWord()}</p>
        {
          this.state.nWrong < this.props.maxWrong ?
            <p className='Hangman-btns'>{this.generateButtons()}</p> :
            <p>Game Over!</p>
        }
        <p>
          <button onClick={this.restart} className="restartBtn">{this.state.won ? "New Game" : "Restart Game"}</button>
        </p>


      </div>
    );
  }
}

export default Hangman;
