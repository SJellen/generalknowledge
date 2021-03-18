import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import styles from '../styles/Question.module.scss'
import useQuestionLogic from '../logic/useQuestionLogic'


export default function Question() {

    const {currentQuestion, questionCleaner, shuffledQuestionsArr} = useContext(QuestionContext)
    const {timeRemaining, username, currentTurn} = useContext(GameContext)

    const {handleClick, handlePassClick, handlePlayClick} = useQuestionLogic()

   console.log(currentTurn)
       
    
    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <div className={styles.passContainer} style={{visibility: timeRemaining >= 9 ? "visible" : 'hidden'}}>
                        <button className={styles.passButton} onClick={handlePassClick}>Pass</button>
                    </div>
                    <div className={styles.playContainer} style={{visibility: timeRemaining >= 9  ? "visible" : 'hidden'}}>
                        <button className={styles.playButton} onClick={handlePlayClick}>Play</button>
                    </div>
               
                </div>
                 <div className={styles.questionContainer}>
                    <h2>{currentQuestion && questionCleaner(currentQuestion.question)}</h2>
                    <span className={styles.timer} style={{visibility: timeRemaining <= 5 ? "visible" : 'hidden'}}>{timeRemaining}</span>
                </div>
            
            <div className={styles.choiceContainer} style={{display: timeRemaining <= 9 && currentTurn === username ? "block" : 'none'}}>
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