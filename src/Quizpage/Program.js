
import React ,{ Fragment, useState} from 'react'
import {Helmet} from "react-helmet";
import { Link, Route, Switch } from 'react-router-dom'
import Timer from './Timer'
import questions from '../questions.json'
import isEmpty from './Empty'
function program() {
   


const questions=  [
    {
        "question": "What temperature does water boil at?",
       "answerOptions": [{"answerText": "50 degrees Celcius" , isCorrect: false},
        {"answerText": "25 degrees Celcius" , isCorrect: false},
       { "answerText": "100 degrees Celcius" , isCorrect: true},
       { "answerText": "150 degrees Celcius" , isCorrect: false},
      ],
    },

    {
        "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
        "optionA": "Wole Soyinka",
        "optionB": "William Shakespeare",
        "optionC": "Ngozi Chimamanda Adichie",
        "optionD": "Dan Brown",
        "answer": "William Shakespeare"
    }]

    

    var lis = [];

    for (var i=0; i<questions[0].answerOptions.length; i++) {
        lis.push(<button>{questions[0].answerOptions[i].answerText}</button>);
    }
    return (
        
        <div className="bigbox">
            {console.log(questions)}
            <Timer/>
            <Fragment>
                <Helmet><title>Quiz</title></Helmet>
                <div >
                    
                    <h5 className="qstn">
                       {questions[0].question}
                    </h5>
                </div>
                <div className="answer-section ">

              
                
                    {lis}
					
                </div>
               
                {/* <Link to ='/Question2'>
                 <button className="button4">Next</button>
                </Link> */}
               
                
            </Fragment><Switch> <Link to = "/">
                    <button className="button2">Exit</button> </Link>
                
                 </Switch>
                 
                 
        </div>
    )
}

export default program

