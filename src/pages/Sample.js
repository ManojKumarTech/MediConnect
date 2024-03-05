import { useState } from "react";
import React from "react";

function Sample(){

    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(1)
    const [multi,setMultiply]=useState()

    function Mul(e){
        e.preventDefault()
        
        const a = e.target.a.value
        const b = e.target.b.value

        setMultiply(a*b)
        
    }

    return(
        <div style={{textAlign:"center"}}>

        <h1>Hello</h1>
        <p>Manoj</p>
        <button onClick={()=> setLike(like + 1)}>👍🏻{like}</button><br></br><br></br>
        <button onClick={()=> setDislike(dislike+2)}>😵{dislike}</button>
        <form onSubmit={Mul}>
            <input name="a" type="number"></input>
            <input name="b" type="number"></input>
            <button>Multiply</button>
        </form>

        <h1>{multi}</h1>
        <a href="/home"><h1>HOME</h1></a>
        </div>
        
    )
}

export default Sample
