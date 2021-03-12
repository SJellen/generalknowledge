import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import Link from 'next/link'
import styles from '../styles/RoundTwo.module.scss'


// localStorage.clear();
const LOCAL_STORAGE_KEY_SR = 'secondround'

export default function RoundTwo() {

    const {secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion, setSecondRoundQuestion1, setSecondRoundQuestion2, setSecondRoundQuestion3, setSecondRoundQuestion4, setSecondRoundQuestion5, setSecondRoundQuestion6, fetchSecondRoundQuestions, getShuffledArr,shuffledQuestionsArr, setShuffledQuestionsArr} = useContext(QuestionContext)
    const {selectedQuestions, cost, setCost, setClockStart, setIsRoundTwo} = useContext(GameContext)
    
    const [categoryArr, setCategoryArr] = useState()


    function handleTileClick(e, question, cost, id, arr) {
        setCurrentQuestion(question)
       
        setCost(cost)
        let x = document.getElementById(id)
        x.innerHTML = ""
        x.style.pointerEvents = "none"
        setClockStart(true)
        
    }

    useEffect(() => {
        const questionArr = currentQuestion && [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        const shuffledQuestions = questionArr && getShuffledArr(questionArr)
        setShuffledQuestionsArr(shuffledQuestions)
        setIsRoundTwo(true)

    }, [currentQuestion])

    




    useEffect(() => {
        const secondRoundCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SR))
       
        if (secondRoundCategories) {
            if (secondRoundCategories[0]?.length !== 0) {
                setSecondRoundQuestion1(secondRoundCategories[0])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[0], setSecondRoundQuestion1)
            }
            if (secondRoundCategories[1]?.length !== 0) {
                setSecondRoundQuestion2(secondRoundCategories[1])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[1], setSecondRoundQuestion2)
            }
            if (secondRoundCategories[2]?.length !== 0) {
                setSecondRoundQuestion3(secondRoundCategories[2])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[2], setSecondRoundQuestion3)
            }
            if (secondRoundCategories[3]?.length !== 0) {
                setSecondRoundQuestion4(secondRoundCategories[3])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[3], setSecondRoundQuestion4)
            }
            if (secondRoundCategories[4]?.length !== 0) {
                setSecondRoundQuestion5(secondRoundCategories[4])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[4], setSecondRoundQuestion5) 
            }
            if (secondRoundCategories[4]?.length !== 0) {
                setSecondRoundQuestion6(secondRoundCategories[5])
            } else {
                fetchSecondRoundQuestions(roundOneCategories[5], setSecondRoundQuestion6)
            }

           
        } else {
            let categoryArr = [secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3,secondRoundQuestion4,secondRoundQuestion5,secondRoundQuestion6]
            localStorage.setItem(LOCAL_STORAGE_KEY_SR, JSON.stringify(categoryArr))
        }

    }, [])


    useEffect(() => {
        setCategoryArr([secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6,])
        
    }, [secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6])





    const categories = categoryArr && categoryArr.map((cat, index) => (
        <div key={index}>
            <div className={styles.gridTitle}>{cat && categoryCleaner(cat[0]?.category)}</div>
            <div className={styles.gridItem} id={index} onClick={(e) => handleTileClick(e, cat[2], 400, index)}>$400</div>
            <div className={styles.gridItem} id={index} onClick={(e) => handleTileClick(e, cat[4], 800, index)}>$800</div>
            <div className={styles.gridItem} id={index} onClick={(e) => handleTileClick(e, cat[5], 1200, index)}>$1200</div>
            <div className={styles.gridItem} id={index} onClick={(e) => handleTileClick(e, cat[6], 1600, index)}>$1600</div>
            <div className={styles.gridItem} id={index} onClick={(e) => handleTileClick(e, cat[7], 2000, index)}>$2000</div>
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