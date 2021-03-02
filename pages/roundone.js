import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/QuestionContext'
import Link from 'next/link'
import styles from '../styles/RoundOne.module.scss'

const LOCAL_STORAGE_KEY = 'firstround'

export default function RoundOne() {

    const {firstRoundQuestions} = useContext(Context)

    

    

    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridTitle}>Category</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$200</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$400</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$600</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$800</div>
                <div className={styles.gridItem}>$1000</div>
                <div className={styles.gridItem}>$1000</div>
                <div className={styles.gridItem}>$1000</div>
                <div className={styles.gridItem}>$1000</div>
                <div className={styles.gridItem}>$1000</div>
                <div className={styles.gridItem}>$1000</div>
            </div>
        </div>
    )
    
}