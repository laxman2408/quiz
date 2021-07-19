import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
// import React, { useState, useEffect, useRef } from "react";
import "./style2.css"
// import Program from './Program'

// import Newpage from './Newpage'

// // import Button from '@material-ui/core/Button';
// import { useQuery } from "react-query";
// import { FaWindowClose } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";


function Quiz () {

    
    // const option = [
    //     {
    //         id : "0",
    //         title : "Programing",

    //     },
    //     {
    //         id : "1",
    //         title : "Yes or No",

    //     },
    //     {
    //         id : "2",
    //         title : "General",

    //     },
    //     {
    //         id : "3",
    //         title : "Reactjs",

    //     },
    // ]
    
    // const [data] = useState(option)



    return (
      <div>
              {/* <div>
                    <nav>
                        <ul className="nav">
                        <li className="abc">Programing</li>
                        <li>Yes or No</li>
                        <li>General </li>
                        <li>ReactJs</li>
                        </ul>
                    </nav>
                    <div >
                        {/* <Button className="button1" >Hello World</Button> */}
                        {/* <button className="button1">Home</button>
                    </div> */}
                {/* </div> */} 
               
                {/* <div>
                    <input type="seach" placeholder="search here" className="input1"></input>
                </div> */}



                <div className="select">
               




                <label for="quiz">Select your Qyiz type :</label><br></br>

                <Link to="/Question2">
                <button className="button3">Easy</button></Link>

                <Link to="/Question3">
                <button className="button3">Medium</button></Link>


                <Link to="/Question4">
                <button className="button3">Hard</button><br></br></Link>
                
                {/* <select name="quiz" id="quiz" className="option">
                <option value="Programing">Programing</option>
                <option value="Yes or No">Yes or No</option>
                <option value="General">General</option>
                <option value="Reactjs">Reactjs</option>
                </select><br>
                </br> */}
             
                <Switch> <Link to = "/">
                    <button className="button2">Exit</button> </Link>
                
                 </Switch>
                 {/* <Newpage/> */}
                 {/* <Program/> */}
                 
                </div>
  {/* <button className="button2">Home</button>  */}

      </div>
    );
                    
                    }
export default Quiz;
