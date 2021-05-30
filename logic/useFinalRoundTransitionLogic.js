import {useContext, useEffect, useState} from 'react'
import {GameContext} from '../context/GameContext'



export default function useFinalRoundTransitionLogic() {

    const {selectedQuestions, score, isRoundTwo,player2Score, player3Score, username,player2, player3, setIsRoundTwo, isRoundThree, setIsRoundThree, userWager, setUserWager, player2Wager, setPlayer2Wager, player3Wager, setPlayer3Wager, setSelectedQuestions, setClockStartFinal, timeRemainingFinal} = useContext(GameContext)

    const [showFinalLink, setShowFinalLink] = useState(false)
    const [tempWager, setTempWager] = useState(1)

    const [firstPlace, setFirstPlace] = useState()
    const [secondPlace, setSecondPlace] = useState()
    const [thirdPlace, setThirdPlace] = useState()

    const sortedArr = [score, player2Score, player3Score].sort((a,b) => {
                return a-b
        })
    
    let  lowScore = sortedArr[0], middleScore = sortedArr[1], highScore = sortedArr[2]


    function computerWagerPlayer2() {
       if (player2Score === score && player2Score === player3Score) {
            setPlayer2Wager(Math.floor(Math.random() * player2Score))
        } else if (player2Score === highScore) {
            if (player2Score - (score * 2) >= 0 && player2Score - (player3Score * 2) >= 0) {
                setPlayer2Wager(1)
            } else {
                if (player2Score - middleScore >= 0) {
                    setPlayer2Wager((player2Score - middleScore) + 1)
                } else {
                    setPlayer2Wager(player2Score)
                }
            }
        } else if (player2Score === lowScore && (player2Score * 2) <= highScore) {
            setPlayer2Wager(player2Score)
        } else if ((player2Score * 2) <= highScore) {
            setPlayer2Wager(player2Score)
        } else {
            setPlayer2Wager(Math.floor(Math.random() * player2Score))
        } 
    }

    function computerWagerPlayer3() {
        if (player3Score === score && player3Score === player2Score) {
            setPlayer3Wager(Math.floor(Math.random() * player3Score))
        } else if (player3Score === highScore) {
            if (player3Score - (score * 2) >= 0 && player3Score - (player2Score * 2) >= 0) {
                setPlayer3Wager(1)
            } else {
                if (player3Score - middleScore >= 0) {
                    setPlayer3Wager((player3Score - middleScore) + 1)
                } else {
                    setPlayer3Wager(player3Score)
                } 
            }
        } else if (player3Score === lowScore && (player3Score * 2) <= highScore) {
            setPlayer3Wager(player3Score)
        } else if ((player3Score * 2) <= highScore) {
            setPlayer3Wager(player3Score)
        } else {
            setPlayer3Wager(Math.floor(Math.random() * player3Score))
        }

    }

 

  


    function handleChange(e) {
        let wager = parseInt(e.target.value)
        setTempWager(wager)
    }

    function handleWagerSubmit(e) {
        e.preventDefault()
        setUserWager(tempWager)
        setTimeout(() => {
            computerWagerPlayer2()
        }, 750)
        setTimeout(() => {
            computerWagerPlayer3()
        }, 1500)
        setTimeout(() => {
            setShowFinalLink(true)
        }, 3000)
    }


    function handleStartClick() {
        setClockStartFinal(true)
        setSelectedQuestions(prevState => prevState + 1)
        
    }

    const sortedArrObject = [ {player: 1, playerName: username, score: score}, {player: 2, playerName: player2, score: player2Score}, {player: 3, playerName: player3, score: player3Score}].sort((a,b) => {
       
        return a.score - b.score
})

    useEffect(() => {
        if (selectedQuestions === 64) {
            
            setThirdPlace(sortedArrObject[0])
            setSecondPlace(sortedArrObject[1])
            setFirstPlace(sortedArrObject[2])
        }
        
 
     }, [selectedQuestions])



    return {handleChange, handleWagerSubmit, showFinalLink, tempWager, handleStartClick, firstPlace, secondPlace, thirdPlace}
    
}