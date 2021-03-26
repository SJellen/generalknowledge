import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'



export default function useFinalRoundTransitionLogic() {

    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager} = useContext(GameContext)

    const [showFinalLink, setShowFinalLink] = useState(false)

    const sortedArr = [score, player2Score, player3Score].sort((a,b) => {
                return a-b
        })


    function handleChange(e) {
        
        let wager = e.target.value
        setUserWager(wager)
    }

    function handleWagerSubmit(e) {
        e.preventDefault()
        
        console.log(sortedArr)
    }



    return {handleChange, handleWagerSubmit, showFinalLink}
    
}