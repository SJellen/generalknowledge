import {useContext, useEffect, useState} from 'react'
import {QuestionContext} from '../context/QuestionContext'
import {GameContext} from '../context/GameContext'



export default function useFinalRoundTransitionLogic() {

    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager} = useContext(GameContext)

    const [showFinalLink, setShowFinalLink] = useState(false)
    const [tempWager, setTempWager] = useState()

    const sortedArr = [score, player2Score, player3Score].sort((a,b) => {
                return a-b
        })
    
    let highScore = sortedArr[2], lowScore = sortedArr[0], middleScore = sortedArr[1]


    function computerWagerPlayer2() {
        
        if (player2Score === highScore) {
            if (player2Score - (score * 2) >= 0 && player2Score - (player3Score * 2) >= 0) {
                setPlayer2Wager(1)
            }
        } else if (player2Score === lowScore) {
            setPlayer2Wager(player2Score)
        } else if ((player2Score * 2) <= highScore) {
            setPlayer2Wager(player2Score)
        }
    
    }

    function computerWagerPlayer3() {
        
        if (player3Score === highScore) {
            if (player3Score - (score * 2) >= 0 && player3Score - (player2Score * 2) >= 0) {
                setPlayer3Wager(1)
            }
        } else if (player3Score === lowScore) {
            setPlayer2Wager(player3Score)
        } else if ((player3Score) <= highScore) {
            setPlayer3Wager(player3Score)
        }
    }

 

    console.log(player2Wager, player3Wager)


    function handleChange(e) {
        let wager = e.target.value
        setTempWager(wager)
    }

    function handleWagerSubmit(e) {
        e.preventDefault()
        setUserWager(tempWager)
        computerWagerPlayer2()
        computerWagerPlayer3()
        console.log(sortedArr)
    }



    return {handleChange, handleWagerSubmit, showFinalLink, tempWager}
    
}