import React from 'react'
import styles from '../WordRow/WordRow.module.scss'
import { useSelector } from 'react-redux'

export const WordRow = ({row}) => {
  const wordRowsCopy = useSelector(state => state.wordRowsCopy)

  return (
    <div className={styles.cardRow}>
        {row.map((elm, i) => (
          <div key={i} className={(wordRowsCopy.firstRowCopy[i]) || styles.defaultCardBack}>
            <span className={styles.card}>{elm}</span>
          </div>
        ))}
      </div>
  )
}
