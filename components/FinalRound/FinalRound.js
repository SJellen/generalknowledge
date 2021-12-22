import React, {useContext, useEffect} from 'react'
import {QuestionContext} from '../../context/QuestionContext'
import {GameContext} from '../../context/GameContext'
import styles from '../../styles/FinalRound.module.scss'

export default function FinalRound() {

    const {finalQuestion, categoryCleaner, currentQuestion} = useContext(QuestionContext)
    const {selectedQuestions,  setSelectedQuestions, isRoundThree} = useContext(GameContext)

    useEffect(() => {
        if (isRoundThree && selectedQuestions === 60) {
            const timer = setTimeout(() => {
            setSelectedQuestions(prevState => prevState + 1)
        }, 2500)
        return () => clearTimeout(timer) 
        }
    }, [])

    return (
        <div className={styles.container}style={{display: isRoundThree && selectedQuestions === 60  ? "block" : "none", pointerEvents: currentQuestion ? "none": ''}}>
            <div className={styles.parent} >
                <div className={styles.gridTitle} id="finalr" onClick={(e) => handleTileClick(e, finalQuestion[0], 1, "finalr")}>{finalQuestion && categoryCleaner(finalQuestion[0]?.category)}</div>
            </div>
        </div>
    )    
}