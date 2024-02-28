import { useState } from "react";
import React from "react";

function Sample(){
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(1)
    return(
        <div style={{textAlign:"center"}}>

        <h1>Hello</h1>
        <p>Manoj</p>
        <button onClick={()=> setLike(like + 1)}>👍🏻{like}</button><br></br><br></br>
        <button onClick={()=> setDislike(dislike+2)}>😵{dislike}</button>
        </div>
        
    )
}

export default Sample
