import React from 'react'
import styles from '../Header/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>#</span>
      <h1 className={styles.title}>WORDLE</h1>
      <span>#</span>
    </header>
  )
}
