import React from "react"

class Machine extends React.Component{
    render(){
        const [s1,s2,s3] = this.props.icons;
        return (
            <>
                <span>{s1} {s2} {s3}</span>
                { s1 === s2 && s1 === s3 && s1 != null ? <p>You win!</p> : <p>You Lose!</p>}
            </>
        )
    }
}

export default Machine