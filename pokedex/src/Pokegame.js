import React from "react"
import Pokedex from "./Pokedex"
import pokemon from "./Pokemon"


class Pokegame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftHand : [],
            rightHand : [],
            lhXP : 0,
            rhXP: 0
        }
    }

    componentDidMount() {
        this.shufflePokemon()
        this.assignHands()
        this.calculateAndSetXP()
        this.determineWinner()
    }

    shufflePokemon() {        
        pokemon.sort(() =>
            Math.random() - 0.5
        )
    }

    assignHands() {
        const halfArrLen = Math.floor(pokemon.length / 2)
        const leftHand = pokemon.slice(0, halfArrLen)
        const rightHand = pokemon.slice(halfArrLen, pokemon.length)

        this.setState({
            leftHand : leftHand,
            rightHand: rightHand
        })
    }

    calculateAndSetXP(){
        let calc = (hand) => {
            return( hand.reduce((total, current) => {
                return total + current.base_experience
            }, 0))
        }

        this.setState((prev) => ({
            leftHand: prev.leftHand,
            rightHand: prev.rightHand,
            lhXP : calc(prev.leftHand),
            rhXP: calc(prev.rightHand)
        }))
    }

    determineWinner(){
        return this.state.lhXP > this.state.rhXP ? true : false;
    }

    render() {
        return (
        <>
            <Pokedex hand={this.state.leftHand} xp={this.state.lhXP} win={this.determineWinner()} />
            <Pokedex hand={this.state.rightHand} xp={this.state.rhXP} win={!this.determineWinner()} />
        </>
        )
    }
}

export default Pokegame