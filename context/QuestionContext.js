import React, { useEffect, useState } from 'react'


const LOCAL_STORAGE_KEY = 'categories'

const Context = React.createContext()

function QuestionContextProvider({ children }) {

    const [generalKnowledge, setGeneralKnowledge] = useState([])
    const [books, setBooks] = useState([])
    const [film, setFilm] = useState([])
    const [music, setMusic] = useState([])
    const [theatre, setTheatre] = useState([])
    const [tv, setTv] = useState([])
    const [videoGames, setVideGames] = useState([])
    const [boardGames, setBoardGames] = useState([])
    const [nature, setNature] = useState([])
    const [computers, setComputers] = useState([])
    const [math, setMath] = useState([])
    const [mythology, setMythology] = useState([])
    const [sports, setSports] = useState([])
    const [geography, setGeography] = useState([])
    const [history, setHistory] = useState([])
    const [politics, setPolitics] = useState([])
    const [art, setArt] = useState([])
    const [celebrities, setCelebrities] = useState([])
    const [animals, setAnimals] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [comics, setComics] = useState([])
    const [gadgets, setGadgets] = useState([])
    const [anime, setAnime] = useState([])
    const [cartoons, setCartoons] = useState([])

    const [shuffledArr, setShuffledArr] = useState([])
    const [roundOneCategories, setRoundOneCategories] = useState([])
    const [roundTwoCategories, setRoundTwoCategories] = useState([])
    const [finalRoundCategory, setFinalRoundCategory] = useState([])

    
    


    const fetchQuestions = async (x, set) => {
        await fetch(`https://opentdb.com/api.php?amount=50&category=${x}&type=multiple`)
        .then(res => res.json())
        .then(data => 
            set(data.results))
        .catch(error => console.log(error))    
    }

    useEffect(() => {
        fetchQuestions(9, setGeneralKnowledge)
        fetchQuestions(10, setBooks)
        fetchQuestions(11, setFilm)
        fetchQuestions(12, setMusic)
        fetchQuestions(13, setTheatre)
        fetchQuestions(14, setTv)
        fetchQuestions(15, setVideGames)
        fetchQuestions(16, setBoardGames)
        fetchQuestions(17, setNature)
        fetchQuestions(18, setComputers)
        fetchQuestions(19, setMath)
        fetchQuestions(20, setMythology)
        fetchQuestions(21, setSports)
        fetchQuestions(22, setGeography)
        fetchQuestions(23, setHistory)
        fetchQuestions(24, setPolitics)
        fetchQuestions(25, setArt)
        fetchQuestions(26, setCelebrities)
        fetchQuestions(27, setAnimals)
        fetchQuestions(28, setVehicles)
        fetchQuestions(29, setComics)
        fetchQuestions(30, setGadgets)
        fetchQuestions(31, setAnime)
        fetchQuestions(32, setCartoons)
        const randomCategories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (randomCategories) {
            setShuffledArr(randomCategories)
        } else if (randomCategories === null ) {
            setShuffledArr(getShuffledArr(categoryArr))
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categoryArr))
        }
        
    }, [])




    let categoryArr = ["generalKnowledge", "books", "film", "music", "theatre", "tv", "videoGames", "boardGames", "nature", "computers", 
        "math", "mythology", "sports","geography", "history", "politics", "art", "celebrities", "animals", "vehicles", "comics",
        "gadgets", "anime", "cartoons"]


        const getShuffledArr = arr => {
            const newArr = arr.slice()
            for (let i = newArr.length - 1; i > 0; i--) {
                const rand = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
            }
            return newArr
            
        }


        console.log(shuffledArr)


    

   
    return (
        <Context.Provider value={{}}>
            { children }
        </Context.Provider>
    )
}


export { QuestionContextProvider, Context }