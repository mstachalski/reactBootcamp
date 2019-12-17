import React from "react"
import Pokecard from "./Pokecard"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Pokemon from "./Pokemon"
import "./Pokedex.css"

class Pokedex extends React.Component {

    assembleTeam(){
        return this.props.hand.map((pk) => {
            const { id, name, type, base_experience: xp } = pk;
            const paddedId = id.toString().padStart(3, "0");
            const imgSrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + paddedId + ".png"
            return <Pokecard key={id} name={name} img={imgSrc} id={id} type={type} exp={xp} />
        })
    }

    render() {
        return (
            <Container className="text-center">
                <h1 className="titleHeading" style={{ color: this.props.win ? "green" : "red" }}>{this.props.win ? "Winning" : "Loosing"} Hand</h1>
                <h5 className="totalXP">Total XP : {this.props.xp} </h5>
                <Row className="justify-content-center">
                    {this.assembleTeam()}
                </Row>
            </Container>
        )
    }
}

export default Pokedex