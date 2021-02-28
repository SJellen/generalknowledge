import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/GameContext'


export default function Start() {

    const {isStart, setIsStart} = useContext(Context)

    

    return (
        <div>
            <h1>start page</h1>
        </div>
    )
}