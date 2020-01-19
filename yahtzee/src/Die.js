import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import "./Die.css";

class Die extends Component {

  render() {
    const numToWord = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

    return (
      <button
        className={`Die ${this.props.locked? "Die-locked" : ""}`}
        onClick={() => this.props.handleClick(this.props.idx)}
      >
        <FontAwesomeIcon icon={numToWord[this.props.val-1]} />
      </button>
    );
  }
}

export default Die;
