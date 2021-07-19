import React, { useState } from 'react'
import { Link,Switch } from 'react-router-dom'
import "./style1.css"




function Loginpage() {
    const [welcome, setwelcome] = useState("")
const handleChange = (event) =>{
    setwelcome(event.target.value)
    event.preventDefault()
}

    return (
        <div>
            <div className="firstpage">
                
                <h2 className="welcome" >welcome {welcome}</h2>
                <input type ="text" onChange={handleChange} placeholder="Enter your name" className="input" autoFocus ></input><br></br>
                <Switch>
                    <Link to = "./Quiz">
                    <button className="button1"><span>Start</span></button>
                    </Link>
                </Switch>
                
                
            </div>
        </div>
    )
}

export default Loginpage
