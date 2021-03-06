import React from "react"
import "./Pokecard.css"
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Pokecard extends React.Component {
    render() {
        return (
            <Col className="text-center mb-5" lg={3} sm={6}>
                <Card className="shadow">
                    <Card.Img src={this.props.img} variant="top" className="pkmImg"/>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        Type: {this.props.type} <br />
                        EXP: {this.props.exp}
                    </Card.Text>
                </Card>
            </Col>
        )
    }
}

export default Pokecard