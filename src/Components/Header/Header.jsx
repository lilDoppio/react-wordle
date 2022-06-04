import React from 'react'
import styles from '../Header/Header.module.scss'

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>WORDLE</h1>
    </header>
  )
}
