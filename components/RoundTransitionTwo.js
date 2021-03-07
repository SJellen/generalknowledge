import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'


export default function RoundTransitionTwo() {

    const {selectedQuestions} = useContext(GameContext)


    return (
        <div  style={{display: selectedQuestions === 60 ? "block" : "none"}}>
            <h1>end of round Two</h1>
        </div>
    )
    
}