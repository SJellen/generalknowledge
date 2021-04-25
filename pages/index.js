import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Start from '../components/Start'
import {GameContext} from '../context/GameContext'
import RoundOne from '../components/Roundone'
import RoundTwo from '../components/RoundTwo'
import FinalRound from '../components/FinalRound'

export default function Home() {

  const {selectedQuestions, currentTurn, username, setCurrentTurn, isRoundTwo, isRoundOne, setIsRoundTwo} = useContext(GameContext)

 

  
  return (
    <div className={styles.container} >
    
     <Start />
     <RoundOne />
     <RoundTwo />
     <FinalRound />
    
    </div>
  )
}
