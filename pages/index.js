import React from 'react'
import Start from '../components/Start'
import RoundOne from '../components/RoundOne/RoundOne'
import RoundTwo from '../components/RoundTwo/RoundTwo'
import FinalRound from '../components/FinalRound/FinalRound'

export default function Home() {

  return (
    <div >
      <Start />
      <RoundOne />
      <RoundTwo />
      <FinalRound />
    </div>
  )
}
