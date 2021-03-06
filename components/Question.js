import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion, getShuffledArr, questionCleaner, setCurrentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, setSelectedQuestions, score, setScore, cost, setCost} = useContext(GameContext)
    const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    const shuffledQuestions = questionArr && getShuffledArr(questionArr)

    

    console.log(currentQuestion?.correct_answer)
    function handleClick(choice) {
        console.log(choice)
        if (choice === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + cost)
        } else {
            setScore(prevScore => prevScore - cost)
        }
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