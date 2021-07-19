
import React, { useState , useEffect } from 'react';
// import Timer from '../Timer'
import './question.css'
import { Link, Route, Switch } from 'react-router-dom'
// import "tailwindcss/tailwind.css"

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France ?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla ?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company ?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there ?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    // const [seconds, setSeconds] = useState(5);
    const [stop, setStop] = useState(false);
  const [questionNumber] = useState(1);

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setStop, timer]);

    useEffect(() => {
        setTimer(10);
    }, [questionNumber]);




//    useEffect(() => {
//         console.log(seconds);
//         // let myInterval ;
//         //   if (seconds > 0) {
//         //       console.log(seconds);
//         //    myInterval= setInterval(() =>{setSeconds( seconds - 1);
//         let myInterval = setInterval(() => {
//             if (seconds > 0) {
//               setSeconds(seconds - 1)
           
//         } }, 1000)
          
//         //    if (seconds === 0) {
            
//         //       // clearInterval(myInterval)
//         //       showScore(true);
//         //     } 
           
          
        
//         return () => {
//           clearInterval(myInterval)
//         }
//     },[seconds])

    // function refresh (){
    //     setSeconds(5);
    // }
    // if(seconds===0){
    //     // setShowScore(true);
    //     console.log('3');
    // } 
    
    if(timer===0){
        setShowScore(true);
        // console.log(showScore);
    }     
	const handleAnswerOptionClick = (isCorrect) => {  setTimer(10)
        // refresh();
		if (isCorrect) {
			setScore(score + 1);
           
           
		}

        
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return ( 
		<div className='app'>
            {/* <div className='timer'><Timer showScore={setShowScore}/></div> */}
            {stop ? (<div>final</div>):(<>	{showScore ? (
                
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <Switch> <Link to = "/">
                <button className="button2">Retry</button> </Link>
            
             </Switch>
            
				</div>
               
			) : (
				<>{timer}
					<div className='question-section'> 
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}</>)}
		
		</div>
	);
}
