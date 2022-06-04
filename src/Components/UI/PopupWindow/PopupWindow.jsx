import React from 'react'

import styles from '../PopupWindow/PopupWindow.module.scss'

export const PopupWindow = ({title, description, hidden}) => {
  return (
    <div className={hidden ? styles.hidden : styles.statusWindow}>
        <div className={styles.statusInfo}>
            <div className={styles.statusText}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
