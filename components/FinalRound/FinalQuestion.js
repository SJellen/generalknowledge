import React, {useContext, useEffect} from 'react'
import {GameContext} from '../../context/GameContext'
import {QuestionContext} from '../../context/QuestionContext'
import styles from '../../styles/FinalQuestion.module.scss'
import useFinalQuestionLogic from '../../logic/useFinalQuestionLogic'

export default function FinalQuestion() {
     
    const {selectedQuestions, timeRemainingFinal} = useContext(GameContext)
    const {finalQuestion, questionCleaner,finalQuestionShuffledArr} = useContext(QuestionContext)

    const {handleClick} = useFinalQuestionLogic()

    return (
        <div>
             <div className={styles.container} style={{display: selectedQuestions === 62 ? "" : "none"}}>
             <div className={styles.buttonContainer} >
                  <span className={styles.timeButton} style={{visibility: timeRemainingFinal <= 5 ? "visible" : 'hidden'}}>{timeRemainingFinal}</span>
             </div>  
             <div className={styles.questionContainer} >
                    <h2>{finalQuestion && questionCleaner(finalQuestion[0]?.question)}</h2>  
                </div>   
            <div className={styles.choiceContainer} >
                <ul className={styles.list} >
                    <li onClick={(e) => handleClick(questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[0]))}>{questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[0])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[1]))}>{questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[1])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[2]))}>{questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[2])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[3]))}>{questionCleaner(finalQuestionShuffledArr && finalQuestionShuffledArr[3])}</li>
                </ul>
            </div>
            </div>
        </div>    
    )
}