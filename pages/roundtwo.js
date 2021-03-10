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


    function handleTileClick(e, question, cost, id) {
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
        console.log(questionArr, shuffledQuestions, shuffledQuestionsArr)
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


    // console.log(secondRoundQuestion1, secondRoundQuestion2, secondRoundQuestion3, secondRoundQuestion4, secondRoundQuestion5, secondRoundQuestion6,)

    return (
        <div className={styles.container}>
            <div className={styles.parent} style={{display: selectedQuestions === 60 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
                <div className={styles.gridTitle}>{secondRoundQuestion1 && categoryCleaner(secondRoundQuestion1[0]?.category)}</div>
                <div className={styles.gridTitle}>{secondRoundQuestion2 && categoryCleaner(secondRoundQuestion2[0]?.category)}</div>
                <div className={styles.gridTitle}>{secondRoundQuestion3 && categoryCleaner(secondRoundQuestion3[0]?.category)}</div>
                <div className={styles.gridTitle}>{secondRoundQuestion4 && categoryCleaner(secondRoundQuestion4[0]?.category)}</div>
                <div className={styles.gridTitle}>{secondRoundQuestion5 && categoryCleaner(secondRoundQuestion5[0]?.category)}</div>
                <div className={styles.gridTitle}>{secondRoundQuestion6 && categoryCleaner(secondRoundQuestion6[0]?.category)}</div>
                <div className={styles.gridItem} id="sr1" onClick={(e) => handleTileClick(e, secondRoundQuestion1[2], 400, "sr1")} >$400</div>
                <div className={styles.gridItem} id="sr2" onClick={(e) => handleTileClick(e, secondRoundQuestion2[2], 400, "sr2")} >$400</div>
                <div className={styles.gridItem} id="sr3" onClick={(e) => handleTileClick(e, secondRoundQuestion3[2], 400, "sr3")} >$400</div>
                <div className={styles.gridItem} id="sr4" onClick={(e) => handleTileClick(e, secondRoundQuestion4[2], 400, "sr4")} >$400</div>
                <div className={styles.gridItem} id="sr5" onClick={(e) => handleTileClick(e, secondRoundQuestion5[2], 400, "sr5")} >$400</div>
                <div className={styles.gridItem} id="sr6" onClick={(e) => handleTileClick(e, secondRoundQuestion6[2], 400, "sr6")} >$400</div>
                <div className={styles.gridItem} id="sr7" onClick={(e) => handleTileClick(e, secondRoundQuestion1[4], 800, "sr7")} >$800</div>
                <div className={styles.gridItem} id="sr8" onClick={(e) => handleTileClick(e, secondRoundQuestion2[4], 800, "sr8")} >$800</div>
                <div className={styles.gridItem} id="sr9" onClick={(e) => handleTileClick(e, secondRoundQuestion3[4], 800, "sr9")} >$800</div>
                <div className={styles.gridItem} id="sr10" onClick={(e) => handleTileClick(e, secondRoundQuestion4[4], 800, "sr10")} >$800</div>
                <div className={styles.gridItem} id="sr11" onClick={(e) => handleTileClick(e, secondRoundQuestion5[4], 800, "sr11")} >$800</div>
                <div className={styles.gridItem} id="sr12" onClick={(e) => handleTileClick(e, secondRoundQuestion6[4], 800, "sr12")} >$800</div>
                <div className={styles.gridItem} id="sr13" onClick={(e) => handleTileClick(e, secondRoundQuestion1[5], 1200, "sr13")} >$1200</div>
                <div className={styles.gridItem} id="sr14" onClick={(e) => handleTileClick(e, secondRoundQuestion2[5], 1200, "sr14")} >$1200</div>
                <div className={styles.gridItem} id="sr15" onClick={(e) => handleTileClick(e, secondRoundQuestion3[5], 1200, "sr15")} >$1200</div>
                <div className={styles.gridItem} id="sr16" onClick={(e) => handleTileClick(e, secondRoundQuestion4[5], 1200, "sr16")} >$1200</div>
                <div className={styles.gridItem} id="sr17" onClick={(e) => handleTileClick(e, secondRoundQuestion5[5], 1200, "sr17")} >$1200</div>
                <div className={styles.gridItem} id="sr18" onClick={(e) => handleTileClick(e, secondRoundQuestion6[5], 1200, "sr18")} >$1200</div>
                <div className={styles.gridItem} id="sr19" onClick={(e) => handleTileClick(e, secondRoundQuestion1[6], 1600, "sr19")} >$1600</div>
                <div className={styles.gridItem} id="sr20" onClick={(e) => handleTileClick(e, secondRoundQuestion2[6], 1600, "sr20")} >$1600</div>
                <div className={styles.gridItem} id="sr21" onClick={(e) => handleTileClick(e, secondRoundQuestion3[6], 1600, "sr21")} >$1600</div>
                <div className={styles.gridItem} id="sr22" onClick={(e) => handleTileClick(e, secondRoundQuestion4[6], 1600, "sr22")} >$1600</div>
                <div className={styles.gridItem} id="sr23" onClick={(e) => handleTileClick(e, secondRoundQuestion5[6], 1600, "sr23")} >$1600</div>
                <div className={styles.gridItem} id="sr24" onClick={(e) => handleTileClick(e, secondRoundQuestion6[6], 1600, "sr24")} >$1600</div>
                <div className={styles.gridItem} id="sr25" onClick={(e) => handleTileClick(e, secondRoundQuestion1[7], 2000, "sr25")} >$2000</div>
                <div className={styles.gridItem} id="sr26" onClick={(e) => handleTileClick(e, secondRoundQuestion2[7], 2000, "sr26")} >$2000</div>
                <div className={styles.gridItem} id="sr27" onClick={(e) => handleTileClick(e, secondRoundQuestion3[7], 2000, "sr27")} >$2000</div>
                <div className={styles.gridItem} id="sr28" onClick={(e) => handleTileClick(e, secondRoundQuestion4[7], 2000, "sr28")} >$2000</div>
                <div className={styles.gridItem} id="sr29" onClick={(e) => handleTileClick(e, secondRoundQuestion5[7], 2000, "sr29")} >$2000</div>
                <div className={styles.gridItem} id="sr30" onClick={(e) => handleTileClick(e, secondRoundQuestion6[7], 2000, "sr30")} >$2000</div>
            </div>
        </div>
    )
    
}