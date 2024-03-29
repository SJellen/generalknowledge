import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../../context/QuestionContext'
import {GameContext} from '../../context/GameContext'
import useRoundTwoLogic from '../../logic/useRoundTwoLogic'
import styles from '../../styles/RoundTwo.module.scss'

export default function RoundTwoBoard() {

    const {handleTileClick2, categoryArr2} = useRoundTwoLogic()
    const {categoryCleaner} = useContext(QuestionContext)
    const {currentTurn, username} = useContext(GameContext)

     const categories = categoryArr2 && categoryArr2.map((cat, index) => (
        <div key={index} >
            <div className={styles.gridTitle}>{cat && categoryCleaner(cat[0]?.category)}</div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[1] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick2(e, cat[1], 400, index, 1)}>{cat && cat[1] !== '' ? "$400" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[2] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick2(e, cat[2], 800, index, 2)}>{cat && cat[2] !== '' ? "$800" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[3] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick2(e, cat[3], 1200, index, 3)}>{cat && cat[3] !== '' ? "$1200" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[4] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick2(e, cat[4], 1600, index, 4)}>{cat && cat[4] !== '' ? "$1600" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[5] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick2(e, cat[5], 2000, index, 5)}>{cat && cat[5] !== '' ? "$2000" : ''}
            </div>
        </div>
    ))
   
    return {categories}
}