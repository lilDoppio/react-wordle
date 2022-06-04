import React from 'react'
import { useSelector } from 'react-redux'
import { WordRow } from '../WordRow/WordRow'

import styles from '../WordsContainer/WordsContainer.module.scss'

export const WordsContainer = () => {
  const wordRows = useSelector(state => state.wordRows)
  const wordRowsCopy = useSelector(state => state.wordRowsCopy)

  return (
    <main className={styles.container}>
      {Object.values(wordRows).map((row, i) =>
        <WordRow key={i} row={row} rowCopy={Object.values(wordRowsCopy)[i]}/>
      )}
    </main>
  )
}