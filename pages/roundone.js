import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/QuestionContext'
import Link from 'next/link'
import styles from '../styles/RoundOne.module.scss'

const LOCAL_STORAGE_KEY = 'firstround'

export default function RoundOne() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, categoryCleaner} = useContext(Context)

    const [currentQuestion, setCurrentQuestion] = useState()
    const [hide, setHide] = useState(false)

    

    function handleClick(e, question) {
        setCurrentQuestion(question)
        
    }

    console.log(currentQuestion && currentQuestion.question)

    useEffect(() => {

    }, [])
    

    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.gridTitle}>{firstRoundQuestion1[0].category && categoryCleaner(firstRoundQuestion1[0].category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion2[0].category && categoryCleaner(firstRoundQuestion2[0].category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion3[0].category && categoryCleaner(firstRoundQuestion3[0].category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion4[0].category && categoryCleaner(firstRoundQuestion4[0].category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion5[0].category && categoryCleaner(firstRoundQuestion5[0].category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion6[0].category && categoryCleaner(firstRoundQuestion6[0].category)}</div>
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