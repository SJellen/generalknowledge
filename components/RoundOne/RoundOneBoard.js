import React, {useContext} from 'react'
import {GameContext} from '../../context/GameContext'
import {QuestionContext} from '../../context/QuestionContext'
import styles from '../../styles/RoundOne.module.scss'
import useRoundOneLogic from '../../logic/useRoundOneLogic'

export default function RoundOneBoard() {

    const {categoryArr, handleTileClick} = useRoundOneLogic()

    const {categoryCleaner} = useContext(QuestionContext)
    const {currentTurn, username} = useContext(GameContext)
    const categories = categoryArr && categoryArr.map((cat, index) => (
        <div key={index}>
            <div className={styles.gridTitle}>{cat && categoryCleaner(cat[0]?.category)}</div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[1] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[1], 200, index, 1)}>{cat && cat[1] !== '' ? "$200" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[2] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[2], 400, index, 2)}>{cat && cat[2] !== '' ? "$400" : ''}
            </div>
            <div 
                className={styles.gridItem} 
                id={index}
                style={{pointerEvents: cat && cat[3] === '' ? "none" : currentTurn !== username ? "none" : '' }} 
                onClick={(e) => handleTileClick(e, cat[3], 600, index, 3)}>{cat && cat[3] !== '' ? "$600" : ''}
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
                onClick={(e) => handleTileClick(e, cat[5], 1000, index, 5)}>{cat && cat[5] !== '' ? "$1000" : ''}
            </div>
        </div> ))

    return {categories}
       
}