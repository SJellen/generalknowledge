import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion, getShuffledArr, questionCleaner, setCurrentQuestion, shuffledQuestionsArr} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME} = useContext(GameContext)
    


  

    

    
    function handleClick(choice) {
        
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
            setAnswerResult("correct")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            
        } else {
            setScore(prevScore => prevScore - cost)
            setAnswerResult("incorrect")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
        }
        setClockStart(false)
        setTimeRemaining(START_TIME)
        setCurrentQuestion()
        setSelectedQuestions(prevCount => prevCount + 1)
        
    }

    useEffect(() => {
        if (currentQuestion && timeRemaining && clockStart) {
            setTimeout(() => {
                setTimeRemaining(time => time === 0 ? 0 : time -1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setScore(prevScore => prevScore - cost)
            setAnswerResult("incorrect")
            setTimeout(() => {
                setAnswerResult()
            }, 750)
            setCurrentQuestion()
            setSelectedQuestions(prevCount => prevCount + 1)
            setClockStart(false)
            setTimeRemaining(START_TIME)
        }

    }, [timeRemaining, clockStart])



    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <h2>{currentQuestion && questionCleaner(currentQuestion.question)}</h2>
                </div>
            
            <div className={styles.choiceContainer}>
                <ul className={styles.list}>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3])}</li>
                </ul>
            </div>
        </div> : ''
        }
        </div>
       
       
    )
    
}