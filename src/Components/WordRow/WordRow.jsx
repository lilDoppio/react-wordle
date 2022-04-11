import React from 'react'

import styles from '../WordRow/WordRow.module.scss'

export const WordRow = ({row, rowCopy}) => {
  return (
    <div className={styles.cardRow}>
        {row.map((elm, i) => (
          <div key={i} className={(rowCopy[i]) || styles.defaultCardBack}>
            <span className={styles.card}>{elm}</span>
          </div>
        ))}
      </div>
  )
}
