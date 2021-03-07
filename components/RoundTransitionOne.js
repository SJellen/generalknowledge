import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'


export default function RoundTransitionOne() {

    const {selectedQuestions} = useContext(GameContext)


    return (
        <div  style={{display: selectedQuestions === 30 ? "block" : "none"}}>
            <h1>end of round one</h1>
        </div>
    )
    
}