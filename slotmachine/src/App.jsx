import React from "react"
import Machine from "./Machine"

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Slot Machines</h1>
                <Machine icons={["x", "x", "x"]} />
                <Machine icons={["y", "z", "x"]} />
                <Machine icons={["v", "x", "x"]} />
            </>
        )
    }
}

export default App