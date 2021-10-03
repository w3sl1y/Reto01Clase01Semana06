import React, { Component } from "react";

class Welcome extends Component{

    render(){
        return (
            <div>
            <h1>Welcome home, Martin</h1>
            <br/><br/><br/>
            <input type="text" placeholder="Username"></input>
            <hr/>
            <input type="password" placeholder="Password"></input>
            <hr/>
            <button onClick={()=>{alert("So you're not martin? ඞ")}}>SIGN IN</button>
            </div>
        )
    }
}



export default Welcome;