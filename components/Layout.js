import Question from '../components/Question'
import Head from 'next/head'
import Header from '../components/Header'
import AnswerResult from './AnswerResult'
import RoundTransitionOne from './RoundOne/RoundTransitionOne'
import RoundTransitionTwo from '../components/RoundTwo/RoundTransitionTwo'
import FinalRoundTransition from '../components/FinalRound/FinalRoundTransition'
import FinalQuestion from '../components/FinalRound/FinalQuestion'
import FinalScoreScreen from '../components/FinalRound/FinalScoreScreen'
import GameOver from './GameOver'
import FinalScreen from '../components/FinalRound/FinalScreen'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
        <Head>
          <title>General Knowledge</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content="A general knowledge trivia game." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
        </Head>
        <Header />
          <main>
            {children}
          </main>
        <AnswerResult />
        <Question />
        <RoundTransitionOne />
        <RoundTransitionTwo />
        <FinalRoundTransition />
        <FinalQuestion />
        <FinalScoreScreen />
        <FinalScreen />
        <GameOver />
      </div>
    )
  }