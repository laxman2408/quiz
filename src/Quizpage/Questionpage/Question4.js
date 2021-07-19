
import React, { useState , useEffect } from 'react';
import Timer from '../Timer'
import './question.css'
import { Link, Route, Switch } from 'react-router-dom'

export default function App() {
	const questions = [
		{
			questionText: 'What did the crocodile swallow in Peter Pan?',
			answerOptions: [
				{ answerText: 'A Book', isCorrect: false },
				{ answerText: 'A Computer', isCorrect: false },
				{ answerText: 'Alarm Clock', isCorrect: true },
				{ answerText: 'A pair of shoes', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: "What temperature does water boil at?",
			answerOptions: [
				{ answerText: '100 degrees Celcius', isCorrect: true },
				{ answerText: '50 degrees Celcius', isCorrect: false },
				{ answerText: '10 degrees Celcius', isCorrect: false },
				{ answerText: '200 degrees Celcius', isCorrect: false },
			],
		},
		{
			questionText: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
			answerOptions: [
				{ answerText: 'Wole Soyinka', isCorrect: false },
				{ answerText: 'Dan Brown', isCorrect: false },
				{ answerText: 'Ngozi Chimamanda Adichie', isCorrect: false },
				{ answerText: 'William Shakespeare', isCorrect: true },
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

	const handleAnswerOptionClick = (isCorrect) => {setTimer(10)
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
            {/* <div className='timer'><Timer/></div> */}
			{showScore ? (
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
			)}
		</div>
	);
}
