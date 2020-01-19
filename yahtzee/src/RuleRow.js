import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  constructor(props){
    super(props)
    this.state = {
      activated : false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({activated: true})
    this.props.doScore()
  }

  render() {
    return (
      <tr className={`RuleRow ${this.state.activated ? "RuleRow-RuleRow-disabled" : "RuleRow-active"}`} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.state.activated ? this.props.score : this.props.hint}</td>
      </tr>
    )
  }
}

export default RuleRow;