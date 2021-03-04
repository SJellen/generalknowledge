import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/QuestionContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion, getShuffledArr} = useContext(Context)

    const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    const shuffledQuestions = questionArr && getShuffledArr(questionArr)

    

    // console.log(questionArr, shuffledQuestions, currentQuestion.correct_answer)


    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <h2>{currentQuestion && currentQuestion.question}</h2>
                </div>
            
            <div className={styles.choiceContainer}>
                <ul className={styles.list}>
                    <li>{shuffledQuestions[0]}</li>
                    <li>{shuffledQuestions[1]}</li>
                    <li>{shuffledQuestions[2]}</li>
                    <li>{shuffledQuestions[3]}</li>
                </ul>
            </div>
        </div> : ''
        }
        </div>
       
       
    )
    
}