import React, { useState } from 'react'
import styles from '../Keyboard/Keyboard.module.scss'
import { firstRow, secondRow, thirdRow } from '../../db/Keyboarddb'
import { useDispatch, useSelector } from 'react-redux'

export const Keyboard = () => {
  const dispatch = useDispatch()
  const wordRows = useSelector(state => state.wordRows)
  // const wordRowsCopy = useSelector(state => state.wordRowsCopy)
  const currentWord = useSelector(state => state.currentWord.currentWord)
  const unknownWord = useSelector(state => state.currentWord.unknownWord)
  const [rowNumber, setRowNumber] = useState(1)

  const taskChanger = (letter) => {
    if (letter === 'DEL') {
      del()
    } else if(letter === 'ВВОД') {
      sub(wordRows.firstRow)
    } else {
      addLetter(letter)
    }
  }

  const addLetter = (letter) => {
    if (wordRows.firstRow.length < 5) {
      dispatch({type: 'ADD_LETTER', payload: letter})
    }
  }

  const del = () => {
    dispatch({type: 'REMOVE_LETTER', payload: wordRows.firstRow.length})
  }

  const sub = (row) => {
    if (wordRows.firstRow.length === 5 && rowNumber === 1) {
      dispatch({type: 'SET_CURRENT_WORD', payload: row})
      check(currentWord)
    }
  }

  const check = (row) => {
    row.map((elm, i) => {
      if (elm === unknownWord[i]) {
        dispatch({type: 'CREATE_CHECK_WORD', payload: styles.greenCardBack})
      } else if (unknownWord.includes(elm)) {
        dispatch({type: 'CREATE_CHECK_WORD', payload: styles.yellowCardBack})
      } else {
        dispatch({type: 'CREATE_CHECK_WORD', payload: ''})
      }
    })
  }

  return (
    <div className={styles.keyboard}>
        <div className={styles.row}>
          {firstRow.map(letter => (
            <button onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
        <div className={styles.row}>
          {secondRow.map(letter => (
            <button onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
        <div className={`${styles.row} ${styles.lastRow}`}>
          {thirdRow.map(letter => (
            <button onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
    </div> 
  )
}
