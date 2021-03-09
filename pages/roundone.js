import React, {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'
import Link from 'next/link'
import styles from '../styles/RoundOne.module.scss'


// localStorage.clear();
const LOCAL_STORAGE_KEY_FR = 'firstround'

export default function RoundOne() {

    const {firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3, firstRoundQuestion4, firstRoundQuestion5, firstRoundQuestion6, categoryCleaner, currentQuestion, setCurrentQuestion, setFirstRoundQuestion1, setFirstRoundQuestion2, setFirstRoundQuestion3, setFirstRoundQuestion4, setFirstRoundQuestion5, setFirstRoundQuestion6, fetchFirstRoundQuestions, getShuffledArr,shuffledQuestionsArr, setShuffledQuestionsArr} = useContext(QuestionContext)
    const {selectedQuestions, cost, setCost, setClockStart} = useContext(GameContext)

    
   
    function handleTileClick(e, question, questionCost, id) {
        setCurrentQuestion(question)
        
        setCost(questionCost)
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

    }, [currentQuestion])
   

   


    useEffect(() => {
        const firstRoundCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FR))
       
        if (firstRoundCategories) {
            if (firstRoundCategories[0]?.length !== 0) {
                setFirstRoundQuestion1(firstRoundCategories[0])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[0], setFirstRoundQuestion1)
            }
            if (firstRoundCategories[1]?.length !== 0) {
                setFirstRoundQuestion2(firstRoundCategories[1])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[1], setFirstRoundQuestion2)
            }
            if (firstRoundCategories[2]?.length !== 0) {
                setFirstRoundQuestion3(firstRoundCategories[2])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[2], setFirstRoundQuestion3)
            }
            if (firstRoundCategories[3]?.length !== 0) {
                setFirstRoundQuestion4(firstRoundCategories[3])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[3], setFirstRoundQuestion4)
            }
            if (firstRoundCategories[4]?.length !== 0) {
                setFirstRoundQuestion5(firstRoundCategories[4])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[4], setFirstRoundQuestion5) 
            }
            if (firstRoundCategories[4]?.length !== 0) {
                 setFirstRoundQuestion6(firstRoundCategories[5])
            } else {
                fetchFirstRoundQuestions(roundOneCategories[5], setFirstRoundQuestion6)
            }

           
        } else {
            let categoryArr = [firstRoundQuestion1, firstRoundQuestion2, firstRoundQuestion3,firstRoundQuestion4,firstRoundQuestion5,firstRoundQuestion6]
            localStorage.setItem(LOCAL_STORAGE_KEY_FR, JSON.stringify(categoryArr))
        }

    }, [])

    
    

    return (
        <div className={styles.container}>
            <div className={styles.parent} style={{display: selectedQuestions === 30 ? "none" : "", pointerEvents: currentQuestion ? "none": ''}}>
                <div className={styles.gridTitle}>{firstRoundQuestion1 && categoryCleaner(firstRoundQuestion1[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion2 && categoryCleaner(firstRoundQuestion2[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion3 && categoryCleaner(firstRoundQuestion3[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion4 && categoryCleaner(firstRoundQuestion4[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion5 && categoryCleaner(firstRoundQuestion5[0]?.category)}</div>
                <div className={styles.gridTitle}>{firstRoundQuestion6 && categoryCleaner(firstRoundQuestion6[0]?.category)}</div>
                <div className={styles.gridItem} id="fr1" onClick={(e) => handleTileClick(e, firstRoundQuestion1[0], 200, "fr1")}>$200</div>
                <div className={styles.gridItem} id="fr2" onClick={(e) => handleTileClick(e, firstRoundQuestion2[0], 200, "fr2")}>$200</div>
                <div className={styles.gridItem} id="fr3" onClick={(e) => handleTileClick(e, firstRoundQuestion3[0], 200, "fr3")}>$200</div>
                <div className={styles.gridItem} id="fr4" onClick={(e) => handleTileClick(e, firstRoundQuestion4[0], 200, "fr4")}>$200</div>
                <div className={styles.gridItem} id="fr5" onClick={(e) => handleTileClick(e, firstRoundQuestion5[0], 200, "fr5")}>$200</div>
                <div className={styles.gridItem} id="fr6" onClick={(e) => handleTileClick(e, firstRoundQuestion6[0], 200, "fr6")}>$200</div>
                <div className={styles.gridItem} id="fr7" onClick={(e) => handleTileClick(e, firstRoundQuestion1[2], 400, "fr7")}>$400</div>
                <div className={styles.gridItem} id="fr8" onClick={(e) => handleTileClick(e, firstRoundQuestion2[2], 400, "fr8")}>$400</div>
                <div className={styles.gridItem} id="fr9" onClick={(e) => handleTileClick(e, firstRoundQuestion3[2], 400, "fr9")}>$400</div>
                <div className={styles.gridItem} id="fr10" onClick={(e) => handleTileClick(e, firstRoundQuestion4[2], 400, "fr10")}>$400</div>
                <div className={styles.gridItem} id="fr11" onClick={(e) => handleTileClick(e, firstRoundQuestion5[2], 400, "fr11")}>$400</div>
                <div className={styles.gridItem} id="fr12" onClick={(e) => handleTileClick(e, firstRoundQuestion6[2], 400, "fr12")}>$400</div>
                <div className={styles.gridItem} id="fr13" onClick={(e) => handleTileClick(e, firstRoundQuestion1[4], 600, "fr13")}>$600</div>
                <div className={styles.gridItem} id="fr14" onClick={(e) => handleTileClick(e, firstRoundQuestion2[4], 600, "fr14")}>$600</div>
                <div className={styles.gridItem} id="fr15" onClick={(e) => handleTileClick(e, firstRoundQuestion3[4], 600, "fr15")}>$600</div>
                <div className={styles.gridItem} id="fr16" onClick={(e) => handleTileClick(e, firstRoundQuestion4[4], 600, "fr16")}>$600</div>
                <div className={styles.gridItem} id="fr17" onClick={(e) => handleTileClick(e, firstRoundQuestion5[4], 600, "fr17")}>$600</div>
                <div className={styles.gridItem} id="fr18" onClick={(e) => handleTileClick(e, firstRoundQuestion6[4], 600, "fr18")}>$600</div>
                <div className={styles.gridItem} id="fr19" onClick={(e) => handleTileClick(e, firstRoundQuestion1[6], 800, "fr19")}>$800</div>
                <div className={styles.gridItem} id="fr20" onClick={(e) => handleTileClick(e, firstRoundQuestion2[6], 800, "fr20")}>$800</div>
                <div className={styles.gridItem} id="fr21" onClick={(e) => handleTileClick(e, firstRoundQuestion3[6], 800, "fr21")}>$800</div>
                <div className={styles.gridItem} id="fr22" onClick={(e) => handleTileClick(e, firstRoundQuestion4[6], 800, "fr22")}>$800</div>
                <div className={styles.gridItem} id="fr23" onClick={(e) => handleTileClick(e, firstRoundQuestion5[6], 800, "fr23")}>$800</div>
                <div className={styles.gridItem} id="fr24" onClick={(e) => handleTileClick(e, firstRoundQuestion6[6], 800, "fr24")}>$800</div>
                <div className={styles.gridItem} id="fr25" onClick={(e) => handleTileClick(e, firstRoundQuestion1[8], 1000, "fr25")}>$1000</div>
                <div className={styles.gridItem} id="fr26" onClick={(e) => handleTileClick(e, firstRoundQuestion2[8], 1000, "fr26")}>$1000</div>
                <div className={styles.gridItem} id="fr27" onClick={(e) => handleTileClick(e, firstRoundQuestion3[8], 1000, "fr27")}>$1000</div>
                <div className={styles.gridItem} id="fr28" onClick={(e) => handleTileClick(e, firstRoundQuestion4[8], 1000, "fr28")}>$1000</div>
                <div className={styles.gridItem} id="fr29" onClick={(e) => handleTileClick(e, firstRoundQuestion5[8], 1000, "fr29")}>$1000</div>
                <div className={styles.gridItem} id="fr30" onClick={(e) => handleTileClick(e, firstRoundQuestion6[8], 1000, "fr30")}>$1000</div>
            </div>
        </div>
    )
    
}