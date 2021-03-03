import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/QuestionContext'
import styles from '../styles/Question.module.scss'


export default function Question() {

    const {currentQuestion} = useContext(Context)

    console.log(currentQuestion && currentQuestion.question)


    return (
        <div>
             { currentQuestion  ?
             <div className={styles.container}>
            <h1>{currentQuestion && currentQuestion.question}</h1>
        </div> : ''
        }
        </div>
       
       
    )
    
}