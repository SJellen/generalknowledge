import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import Link from 'next/link'
import styles from '../styles/FinalRound.module.scss'



export default function FinalRound() {

    const {finalQuestion} = useContext(QuestionContext)

    useEffect(() => {

    }, [])

    console.log(finalQuestion)



    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.gridTitle}>Category</div>
            </div>
        </div>
    )
    
}