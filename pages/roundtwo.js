import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import useRoundTwoLogic from '../logic/useRoundTwoLogic'
import styles from '../styles/RoundTwo.module.scss'



export default function RoundTwo() {

    const {categoryArr, handleTileClick} = useRoundTwoLogic()

    const {categoryCleaner, currentQuestion} = useContext(QuestionContext)
    const {selectedQuestions, currentTurn, username} = useContext(GameContext)
    




    useEffect(() => { 
    }, [categoryArr])




    const categories = categoryArr && categoryArr.map((cat, index) => (
        <div key={index}>
            <div className={styles.gridTitle}>{cat && categoryCleaner(cat[0]?.category)}</div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[2] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[2], 400, index, 2)}>{cat && cat[2] !== '' ? "$400" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[4] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[4], 800, index, 4)}>{cat && cat[4] !== '' ? "$800" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[5] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[5], 1200, index, 5)}>{cat && cat[5] !== '' ? "$1200" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[6] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[6], 1600, index, 6)}>{cat && cat[6] !== '' ? "$1600" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[7] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[7], 2000, index, 7)}>{cat && cat[7] !== '' ? "$2000" : ''}
            </div>
        </div>
    ))

    return (
        <div className={styles.container}>
        <div className={styles.parent} style={{display: selectedQuestions === 60 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
            {categories} 
        </div>
    </div>
    )
    
}