import React, { useState } from 'react'
import styles from '../Keyboard/Keyboard.module.scss'
import { firstRow, secondRow, thirdRow } from '../../db/Keyboarddb'
import { useDispatch, useSelector } from 'react-redux'

export const Keyboard = () => {
  const dispatch = useDispatch()
  const wordRows = useSelector(state => state.wordRows)
  const wordRowsCopy = useSelector(state => state.wordRowsCopy)
  const currentWord = useSelector(state => state.currentWord.currentWord)
  const unknownWord = useSelector(state => state.currentWord.unknownWord)
  const [rowNumber, setRowNumber] = useState(1)
  const [rowCheck, setRowCheck] = useState('FIRST_ROW_CHECK')

  const taskChanger = (letter) => {
    if (letter === 'DEL') {
      del()
    } else if(letter === 'ВВОД') {
      if (rowNumber === 1) {
        sub(wordRows.firstRow)
      } else if (rowNumber === 2) {
        sub(wordRows.secondRow)
      } else if (rowNumber === 3) {
        sub(wordRows.thirdRow)
      }
    } else {
      addLetter(letter)
    }
  }

  console.log(wordRows)
  console.log(currentWord)
  console.log(wordRowsCopy)

  const addLetter = (letter) => {
    if (rowNumber === 1) {
      if (wordRows.firstRow.length < 5) {
        dispatch({type: 'FIRST_ROW_ADD_LETTER', payload: letter})
      }
    } else if (rowNumber === 2) {
      if (wordRows.secondRow.length < 5) {
        dispatch({type: 'SECOND_ROW_ADD_LETTER', payload: letter})
      }
    } else if (rowNumber === 3) {
      if (wordRows.thirdRow.length < 5) {
        dispatch({type: 'THIRD_ROW_ADD_LETTER', payload: letter})
      }
    }
  }

  const del = () => {
    if (rowNumber === 1) {
      dispatch({type: 'FIRST_ROW_REMOVE_LETTER', payload: wordRows.firstRow.length})
    } else if (rowNumber === 2) {
      dispatch({type: 'SECOND_ROW_REMOVE_LETTER', payload: wordRows.secondRow.length})
    } else if (rowNumber === 3) {
      dispatch({type: 'THIRD_ROW_REMOVE_LETTER', payload: wordRows.thirdRow.length})
    }
  }

  const sub = (row) => {
    if (rowNumber === 1) {
      if (wordRows.firstRow.length === 5 && rowNumber === 1) {
        dispatch({type: 'SET_CURRENT_WORD', payload: row})
        check(currentWord)
        setRowNumber(rowNumber + 1)
      }
    } else if (rowNumber === 2) {
      if (wordRows.secondRow.length === 5 && rowNumber === 2) {
        dispatch({type: 'SET_CURRENT_WORD', payload: row})
        check(currentWord)
        setRowNumber(rowNumber + 1)
      }
    } else if (rowNumber === 3) {
      if (wordRows.thirdRow.length === 5 && rowNumber === 3) {
        dispatch({type: 'SET_CURRENT_WORD', payload: row})
        check(currentWord)
        setRowNumber(rowNumber + 1)
      }
    }
  }

  const check = (row) => {
    if (rowNumber === 2) {
      setRowCheck('SECOND_ROW_CHECK')
    } else if (rowNumber === 3) {
      setRowCheck('THIRD_ROW_CHECK')
    }  

      row.map((elm, i) => {
      if (elm === unknownWord[i]) {
        dispatch({type: rowCheck, payload: styles.greenCardBack})
      } else if (unknownWord.includes(elm)) {
        dispatch({type: rowCheck, payload: styles.yellowCardBack})
      } else {
        dispatch({type: rowCheck, payload: ''})
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
