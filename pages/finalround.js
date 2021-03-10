import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import Link from 'next/link'
import styles from '../styles/FinalRound.module.scss'

// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'finalround'

export default function FinalRound() {

    const {finalQuestion} = useContext(QuestionContext)

    useEffect(() => {
            console.log(finalQuestion)
    }, [finalQuestion])

   



    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.gridTitle}>{finalQuestion && categoryCleaner(finalQuestion[0]?.category)}</div>
            </div>
        </div>
    )
    
}