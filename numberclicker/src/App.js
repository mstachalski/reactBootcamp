import React from 'react';
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: 1
    }
    this.generateNewNumber = this.generateNewNumber.bind(this);
  }

  generateNewNumber() {
    console.log("Generating new number!")
    const newNum = Math.floor(Math.random() * 10) + 1;
    console.log(newNum)
    this.setState({
      currentNumber : newNum
    });
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.currentNumber}</h1>
        {this.state.currentNumber === 7 ?
          <h1>You Win!</h1>
          : <button onClick={this.generateNewNumber}>Random Number</button>}
      </div>
    )
  }
}

export default App;
