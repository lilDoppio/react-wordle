import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firstRow, secondRow, thirdRow } from '../../db/Keyboarddb'
import { rowTypes, checkRows } from '../../db/dispatchTypesdb'

import styles from '../Keyboard/Keyboard.module.scss'


export const Keyboard = () => {
  const dispatch = useDispatch()
  const currentWord = useSelector(state => state.currentWord.currentWord)
  const unknownWord = useSelector(state => state.currentWord.unknownWord)
  const checkWord = useSelector(state => state.currentWord.checkWord)
  const [rowNumber, setRowNumber] = useState(0)

  useEffect(() => {
    if (rowNumber < 6) {
      dispatch({type: rowTypes[rowNumber], payload: currentWord})
    }
    if (checkWord !== 5 && rowNumber === 6) {
      dispatch({type: 'SET_GAME_STATUS', payload: 0})
    }
  },[rowNumber, currentWord, checkWord, dispatch])


  const taskChanger = (letter) => {
    if (letter === 'DEL') {
      del()
    } else if(letter === 'ВВОД') {
      sub(currentWord)
    } else {
      addLetter(letter)
    }
  }

  const addLetter = (letter) => {
    if (currentWord.length < 5) {
      dispatch({type: 'ADD_LETTER', payload: letter})
    }
  }

  const del = () => {
    dispatch({type: 'REMOVE_LETTER', payload: currentWord.length})
  }

  const sub = (row) => {
    if (currentWord.length === 5 && rowNumber <= 6) {
      dispatch({type: rowTypes[rowNumber], payload: row})
      check(currentWord)
      setRowNumber(rowNumber + 1)
      dispatch({type: 'SET_CURRENT_WORD', payload: []})
    }
  }

  const check = (row) => {
    dispatch({type: 'REMOVE_ALL_CHECK_LETTERS', payload: '_'})
    row.map((elm, i) => {
      if (elm === unknownWord[i]) {
        dispatch({type: 'ADD_CHECK_LETTER', payload: '_'})
        return dispatch({type: checkRows[rowNumber], payload: styles.greenCardBack})
      } else if (unknownWord.includes(elm)) {
        return dispatch({type: checkRows[rowNumber], payload: styles.yellowCardBack})
      } else {
        return dispatch({type: checkRows[rowNumber], payload: ''})
      }
    })
  }

  return (
    <div className={styles.keyboard}>
        <div className={styles.row}>
          {firstRow.map((letter, i) => (
            <button 
              key={i} 
              disabled={rowNumber === 6? true : false} 
              onClick={() => taskChanger(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className={styles.row}>
          {secondRow.map((letter, i) => (
            <button 
              key={i} 
              disabled={rowNumber === 6? true : false} 
              onClick={() => taskChanger(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className={`${styles.row} ${styles.lastRow}`}>
          {thirdRow.map((letter, i) => (
            <button 
              key={i} 
              disabled={rowNumber === 6? true : false} 
              onClick={() => taskChanger(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
    </div> 
  )
}
