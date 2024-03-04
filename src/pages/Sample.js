import { useState } from "react";
import React from "react";

function Sample(){
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(1)
    const [multi,Multiply]=useState()

    function Mul(e){
        e.preventDefault()
        const formate = new FormData(e.target)
        const a = parseInt(formate.get('a'))
        const b = parseInt(formate.get('b'))
        
        Multiply(a*b)

    }
    return(
        <div style={{textAlign:"center"}}>

        <h1>Hello</h1>
        <p>Manoj</p>
        <button onClick={()=> setLike(like + 1)}>👍🏻{like}</button><br></br><br></br>
        <button onClick={()=> setDislike(dislike+2)}>😵{dislike}</button>
        <form onSubmit={(e)=>Mul(e)}>
            <input name="a" type="number"></input>
            <input name="b" type="number"></input>
            <button>Multiply</button>
        </form>
        <h1>{multi}</h1>
        </div>
        
    )
}

export default Sample
