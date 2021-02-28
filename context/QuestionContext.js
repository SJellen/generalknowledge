import React, { useEffect, useState } from 'react'

// localStorage.clear();
const LOCAL_STORAGE_KEY = 'categories'



const Context = React.createContext()

function QuestionContextProvider({ children }) {

   
    const [shuffledArr, setShuffledArr] = useState([])
    const [roundOneCategories, setRoundOneCategories] = useState([])
    const [roundTwoCategories, setRoundTwoCategories] = useState([])
    const [finalRoundCategory, setFinalRoundCategory] = useState([])

    const [finalQuestion, setFinalQuestion] = useState()
    const [firstRoundQuestions, setFirstRoundQuestions] = useState()
    const [secondRoundQuestions, setSecondRoundQuestions] = useState()
    
    const categoryArr = [9,10,11,12, 13,14,15,16,17,18,19,20,21,22,23,24,25,26, 27,28,29,30,31,32]

    // shuffle categories

    const getShuffledArr = arr => {
            const newArr = arr.slice()
            for (let i = newArr.length - 1; i > 0; i--) {
                const rand = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
            }
            return newArr
        }

    // get categories from storage if exist
    useEffect(() => {
        const randomCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (randomCategories) {
            setShuffledArr(randomCategories)
        } else if (randomCategories === null ) {
            let shuffle = getShuffledArr(categoryArr)
            setShuffledArr(shuffle)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shuffle))
        }
    }, [])  

    // get categories for each round
    function categoryCreator() {
        let tempArr = shuffledArr
        const firstArr = tempArr.slice(0,6)
        const secondArr = tempArr.slice(6,12)
        const finalArr = tempArr.slice(-1)
        setRoundOneCategories(firstArr)
        setRoundTwoCategories(secondArr)
        setFinalRoundCategory(finalArr)
    }

    useEffect(() => {
            categoryCreator()
    }, [shuffledArr])     

     



    const fetchFinalQuestion = async (cat) => {
        await fetch(`https://opentdb.com/api.php?amount=1&category=${cat}&difficulty=hard&type=multiple`)
            .then(res => res.json())
            .then(data => 
                setFinalQuestion(data.results))
            .catch(error => console.log(error))  
    }

    useEffect(() => {
        fetchFinalQuestion(finalRoundCategory[0])
    }, [finalRoundCategory])

    const fetchFirstRoundQuestions = async (cat) => {
        await fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&type=multiple`)
        .then(res => res.json())
        .then(data => 
            setFirstRoundQuestions(data.results))
        .catch(error => console.log(error))    
    }

    useEffect(() => {
        fetchFirstRoundQuestions(roundOneCategories[0])
        fetchFirstRoundQuestions(roundOneCategories[1])
        fetchFirstRoundQuestions(roundOneCategories[2])
        fetchFirstRoundQuestions(roundOneCategories[3])
        fetchFirstRoundQuestions(roundOneCategories[4])
        fetchFirstRoundQuestions(roundOneCategories[5])

    }, [roundOneCategories])

    const fetchSecondRoundQuestions = async (cat) => {
        await fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&type=multiple`)
        .then(res => res.json())
        .then(data => 
            setSecondRoundQuestions(data.results))
        .catch(error => console.log(error))    
    }

    useEffect(() => {
        fetchSecondRoundQuestions(roundTwoCategories[0])
        fetchSecondRoundQuestions(roundTwoCategories[1])
        fetchSecondRoundQuestions(roundTwoCategories[2])
        fetchSecondRoundQuestions(roundTwoCategories[3])
        fetchSecondRoundQuestions(roundTwoCategories[4])
        fetchSecondRoundQuestions(roundTwoCategories[5])

    }, [roundTwoCategories])    



    


    console.log(finalQuestion, firstRoundQuestions, secondRoundQuestions)
    
    
    
    // console.log(shuffledArr)
   
    return (
        <Context.Provider value={{}}>
            { children }
        </Context.Provider>
    )
}


export { QuestionContextProvider, Context }