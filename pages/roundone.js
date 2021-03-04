import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import Link from 'next/link'
import styles from '../styles/RoundOne.module.scss'


// localStorage.clear();
// const LOCAL_STORAGE_KEY_FR = 'firstround'

export default function RoundOne() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6} = useContext(QuestionContext)

    

    

    function handleClick(e, question) {
        setCurrentQuestion(question)
        
    }

    

    // useEffect(() => {
    //     const firstRoundCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FR))
       
    //     if (firstRoundCategories) {
    //         if (firstRoundCategories[0]) {
    //             setFirstRoundQuestion1(firstRoundCategories[0])
    //         }
    //         if (firstRoundCategories[1]) {
    //             setFirstRoundQuestion2(firstRoundCategories[1])
    //         }
    //         if (firstRoundCategories[2]) {
    //             setFirstRoundQuestion3(firstRoundCategories[2])
    //         }
    //         if (firstRoundCategories[3]) {
    //             setFirstRoundQuestion4(firstRoundCategories[3])
    //         }
    //         if (firstRoundCategories[4]) {
    //             setFirstRoundQuestion5(firstRoundCategories[4])
    //         }
    //         if (firstRoundCategories[5]) {
    //             setFirstRoundQuestion6(firstRoundCategories[5])
    //         }
  
    //     } else if (firstRoundCategories === null) {
    //         let categoryArr = [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3,firstRoundQuestion4,firstRoundQuestion5,firstRoundQuestion6]
    //         localStorage.setItem(LOCAL_STORAGE_KEY_FR, JSON.stringify(categoryArr))
    //     }

    // }, [])

    
    

    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.gridTitle}>{firstRoundQuestion1 && categoryCleaner(firstRoundQuestion1[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion2 && categoryCleaner(firstRoundQuestion2[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion3 && categoryCleaner(firstRoundQuestion3[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion4 && categoryCleaner(firstRoundQuestion4[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion5 && categoryCleaner(firstRoundQuestion5[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion6 && categoryCleaner(firstRoundQuestion6[0]?.category)}</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion1[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion2[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion3[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion4[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion5[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion6[0])}>$200</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion1[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion2[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion3[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion4[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion5[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion6[2])}>$400</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion1[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion2[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion3[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion4[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion5[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion6[4])}>$600</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion1[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion2[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion3[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion4[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion5[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion6[6])}>$800</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion1[8])}>$1000</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion2[8])}>$1000</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion3[8])}>$1000</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion4[8])}>$1000</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion5[8])}>$1000</div>
                <div className={styles.gridItem} onClick={(e) => handleClick(e, firstRoundQuestion6[8])}>$1000</div>
            </div>
        </div>
    )
    
}