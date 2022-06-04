import React from 'react'

import styles from '../Button/Btn.module.scss'

export const Btn = ({title, onClick}) => {
  return (
    <button className={styles.btn}>
        <h2>{title}</h2>
    </button>
  )
}