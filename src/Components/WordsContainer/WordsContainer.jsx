import React from 'react'
import styles from '../WordsContainer/WordsContainer.module.scss'
import { useSelector } from 'react-redux'
import { WordRow } from '../WordRow/WordRow'

export const WordsContainer = () => {
  const wordRows = useSelector(state => state.wordRows)
  const wordRowsCopy = useSelector(state => state.wordRowsCopy)

  return (
    <main className={styles.container}>
      {Object.values(wordRows).map((row, i) =>
        <WordRow row={row} rowCopy={Object.values(wordRowsCopy)[i]}/>
      )}
    </main>
  )
}
