import React from "react";
import {} from 'firebase/auth'

function Mobile(){
    
    function HandleSubmit(e){
        e.preventDefault()
        console.log(e.target.number.value)


    }

    return(
        <>
        <h1>Mobile Registerion</h1>
        <form onSubmit={(e)=>HandleSubmit(e)}>
            <input type="number" name="number" placeholder="enter mobile number"></input>
            <button>Submit</button>
        </form>
        <a href="/sample"><h1>Sample</h1></a>
        </>
    )
}
export default Mobile