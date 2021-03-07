import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion, getShuffledArr, questionCleaner, setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost, answerResult, setAnswerResult, timeRemaining, setTimeRemaining, clockStart, setClockStart, START_TIME} = useContext(GameContext)
    const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    
    const shuffledQuestions = questionArr && getShuffledArr(questionArr)
    

    

    
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

    console.log(timeRemaining)


    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <h2>{currentQuestion && questionCleaner(currentQuestion.question)}</h2>
                </div>
            
            <div className={styles.choiceContainer}>
                <ul className={styles.list}>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestions[0]))}>{questionCleaner(shuffledQuestions[0])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestions[1]))}>{questionCleaner(shuffledQuestions[1])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestions[2]))}>{questionCleaner(shuffledQuestions[2])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestions[3]))}>{questionCleaner(shuffledQuestions[3])}</li>
                </ul>
            </div>
        </div> : ''
        }
        </div>
       
       
    )
    
}