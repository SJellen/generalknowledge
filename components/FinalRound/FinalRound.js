import React, {useContext, useEffect} from 'react'
import {QuestionContext} from '../../context/QuestionContext'
import {GameContext} from '../../context/GameContext'

import styles from '../../styles/FinalRound.module.scss'

export default function FinalRound() {

    const {finalQuestion, categoryCleaner, currentQuestion, setShuffledQuestionsArr, getShuffledArr} = useContext(QuestionContext)
    const {selectedQuestions,  setSelectedQuestions, isRoundThree} = useContext(GameContext)

    useEffect(() => {
        const questionArr = finalQuestion && [...finalQuestion[0].incorrect_answers, finalQuestion[0].correct_answer]
        
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
        if (isRoundThree) {
            setTimeout(() => {
            setSelectedQuestions(prevState => prevState + 1)
        }, 2500)
        }
    }, [finalQuestion])

    return (
        <div className={styles.container}style={{display: isRoundThree && selectedQuestions === 60 || isRoundThree && selectedQuestions === 62  ? "block" : "none", pointerEvents: currentQuestion ? "none": ''}}>
            <div className={styles.parent} >
                <div className={styles.gridTitle} id="finalr" onClick={(e) => handleTileClick(e, finalQuestion[0], 1, "finalr")}>{finalQuestion && categoryCleaner(finalQuestion[0]?.category)}</div>
            </div>
        </div>
    )
    
}