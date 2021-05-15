import React, {useContext} from 'react'
import {GameContext} from '../../context/GameContext'
import {QuestionContext} from '../../context/QuestionContext'
import styles from '../../styles/FinalQuestion.module.scss'
import useFinalQuestionLogic from '../../logic/useFinalQuestionLogic'


export default function FinalQuestion() {
     
    const {selectedQuestions, timeRemainingFinal } = useContext(GameContext)
    const {finalQuestion, questionCleaner, shuffledQuestionsArr, passPlayTime} = useContext(QuestionContext)

    const {handleClick} = useFinalQuestionLogic()


    return (
        <div>
             <div className={styles.container} style={{display: selectedQuestions === 62 ? "block" : "none"}}>
             <div className={styles.buttonContainer} >
                  <span className={styles.timeButton} style={{visibility: timeRemainingFinal <= 5 ? "visible" : 'hidden'}}>{timeRemainingFinal}</span>
             </div>  
             <div className={styles.questionContainer} >
                    <h2>{finalQuestion && questionCleaner(finalQuestion[0].question)}</h2>
                    
                </div>
                
            
            <div className={styles.choiceContainer} >
                <ul className={styles.list} >
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[0])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[1])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[2])}</li>
                    <li onClick={(e) => handleClick(questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3]))}>{questionCleaner(shuffledQuestionsArr && shuffledQuestionsArr[3])}</li>
                </ul>
            </div>
            </div>
        </div>
       
           
         
    )
}