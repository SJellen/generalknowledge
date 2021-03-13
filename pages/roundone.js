import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import Link from 'next/link'
import styles from '../styles/RoundOne.module.scss'
import useRoundOneLogic from '../logic/useRoundOneLogic'


// localStorage.clear();
// const LOCAL_STORAGE_KEY_FR = 'firstround'

export default function RoundOne() {

    const {categoryArr, handleTileClick} = useRoundOneLogic()

    const {categoryCleaner, currentQuestion} = useContext(QuestionContext)
    const {selectedQuestions} = useContext(GameContext)

    useEffect(() => {

    }, [categoryArr])


    


    const categories = categoryArr && categoryArr.map((cat, index) => (
        <div key={index}>
            <div className={styles.gridTitle}>{cat && categoryCleaner(cat[0]?.category)}</div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[1] === '' ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[1], 200, index, 1)}>{cat && cat[1] !== '' ? "$200" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[2] === '' ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[2], 400, index, 2)}>{cat && cat[2] !== '' ? "$400" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[3] === '' ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[3], 600, index, 3)}>{cat && cat[3] !== '' ? "$600" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[4] === '' ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[4], 800, index, 4)}>{cat && cat[4] !== '' ? "$800" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[5] === '' ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[5], 1000, index, 5)}>{cat && cat[5] !== '' ? "$1000" : ''}
            </div>
        </div>
    ))

    
    

    return (

         <div className={styles.container}>
            <div className={styles.parent} style={{display: selectedQuestions === 30 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
                {categories} 
            </div>
        </div>
  
    )  
}