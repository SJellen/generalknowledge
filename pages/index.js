import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Start from '../gamepages/Start'

export default function Home() {
  return (
    <div className={styles.container}>
    
     <Start />
     <h1 className={styles.h1}>main</h1>
    </div>
  )
}
