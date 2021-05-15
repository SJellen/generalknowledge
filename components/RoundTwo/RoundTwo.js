import React, {useContext} from 'react'
import {QuestionContext} from '../../context/QuestionContext'
import {GameContext} from '../../context/GameContext'
import useRoundTwoLogic from '../../logic/useRoundTwoLogic'
import styles from '../../styles/RoundTwo.module.scss'
import RoundTwoBoard from '../RoundTwo/RoundTwoBoard'


export default function RoundTwo() {

    const { currentQuestion} = useContext(QuestionContext)
    const {selectedQuestions,isRoundTwo} = useContext(GameContext)
    const {categories} = RoundTwoBoard()

    return (
        <div className={styles.container} style={{display: isRoundTwo ? '' : 'none'}}>
        <div className={styles.parent} style={{display: selectedQuestions === 60 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
            {categories} 
        </div>
    </div>
    )
    
}