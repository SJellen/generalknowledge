import React from "react";
import styles from '../styles/Spinner.module.scss'

export default function Spinner() {
  return (
    <div className={styles.container}>
        <div className={styles.loadingContainer}>
            <h2 className={styles.loading}>Gathering categories and questions..</h2>
            <div className={styles.spinner}></div>
        </div>
      
    </div>
  )
}

