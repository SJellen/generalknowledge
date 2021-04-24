import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Start from '../components/Start'
import RoundOne from '../components/Roundone'

export default function Home() {
  return (
    <div className={styles.container} >
    
     <Start />
     <RoundOne />
    
    </div>
  )
}
