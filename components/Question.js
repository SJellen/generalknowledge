import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion, getShuffledArr, questionCleaner, setCurrentQuestion, selectedQuestions, setSelectedQuestions} = useContext(QuestionContext)

    const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    const shuffledQuestions = questionArr && getShuffledArr(questionArr)

    

    // console.log(questionArr, shuffledQuestions, currentQuestion.correct_answer)
    function handleClick() {
        setCurrentQuestion()
        setSelectedQuestions(prevCount => prevCount + 1)
    }


    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <h2>{currentQuestion && questionCleaner(currentQuestion.question)}</h2>
                </div>
            
            <div className={styles.choiceContainer}>
                <ul className={styles.list}>
                    <li onClick={handleClick}>{questionCleaner(shuffledQuestions[0])}</li>
                    <li onClick={handleClick}>{questionCleaner(shuffledQuestions[1])}</li>
                    <li onClick={handleClick}>{questionCleaner(shuffledQuestions[2])}</li>
                    <li onClick={handleClick}>{questionCleaner(shuffledQuestions[3])}</li>
                </ul>
            </div>
        </div> : ''
        }
        </div>
       
       
    )
    
}