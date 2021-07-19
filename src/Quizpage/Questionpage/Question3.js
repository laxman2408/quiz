
import React, { useState , useEffect } from 'react';
import Timer from '../Timer'
import './question.css'
import { Link, Route, Switch } from 'react-router-dom'

export default function App() {
	const questions = [
		{
			questionText: 'Which is the only mammal that can’t jump?',
			answerOptions: [
				{ answerText: 'monkey', isCorrect: false },
				{ answerText: 'pig', isCorrect: false },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: true },
			],
		},
		{
			questionText: 'What colour is a panda?',
			answerOptions: [
				{ answerText: 'Green and Yellow', isCorrect: false },
				{ answerText: ' Black and White', isCorrect: true },
				{ answerText: 'Green and White', isCorrect: false },
				{ answerText: 'Blue and Red', isCorrect: false },
			],
		},
		{
			questionText: 'Where is the smallest bone in the human body?',
			answerOptions: [
				{ answerText: 'Ear', isCorrect: true },
				{ answerText: 'Heart', isCorrect: false },
				{ answerText: 'Lungs', isCorrect: false },
				{ answerText: 'Liver', isCorrect: false },
			],
		},
		{
			questionText: 'What does the roman numeral C represent?',
			answerOptions: [
				{ answerText: '1000', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '100000', isCorrect: false },
				{ answerText: '100', isCorrect: true },
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
