import React, {useContext} from 'react'
import {QuestionContext} from '../../context/QuestionContext'
import {GameContext} from '../../context/GameContext'
import styles from '../../styles/RoundOne.module.scss'
import RoundOneBoard from './RoundOneBoard'

export default function RoundOne() {

    const {currentQuestion} = useContext(QuestionContext)
    const {selectedQuestions,isRoundOne} = useContext(GameContext)
    const {categories} = RoundOneBoard()

    return (
         <div className={styles.container} style={{display: isRoundOne ? '' : 'none'}}>
            <div className={styles.parent} style={{display: selectedQuestions === 30 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
                {categories}
            </div>
        </div>
    )  
}