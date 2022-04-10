import React, { useEffect, useState } from 'react'
import styles from '../Keyboard/Keyboard.module.scss'
import { firstRow, secondRow, thirdRow } from '../../db/Keyboarddb'
import { useDispatch, useSelector } from 'react-redux'

export const Keyboard = () => {
  const dispatch = useDispatch()
  const currentWord = useSelector(state => state.currentWord.currentWord)
  const unknownWord = useSelector(state => state.currentWord.unknownWord)
  const [rowNumber, setRowNumber] = useState(0)
  const [rowCheck, setRowCheck] = useState('FIRST_ROW_CHECK')
  const [currentRow, setCurrentRow] = useState('SET_FIRST_ROW_CURRENT')

  useEffect(() => {
    if (rowNumber === 0) {
      dispatch({type:'SET_FIRST_ROW_CURRENT', payload: currentWord})
    } else if (rowNumber === 1) {
      dispatch({type:'SET_SECOND_ROW_CURRENT', payload: currentWord})
    } else if (rowNumber === 2) {
      dispatch({type:'SET_THIRD_ROW_CURRENT', payload: currentWord})
    } else if (rowNumber === 3) {
      dispatch({type:'SET_FOURTH_ROW_CURRENT', payload: currentWord})
    } else if (rowNumber === 4) {
      dispatch({type:'SET_FIFTH_ROW_CURRENT', payload: currentWord})
    } else if (rowNumber === 5) {
      dispatch({type:'SET_SIXTH_ROW_CURRENT', payload: currentWord})
    }

    if (rowNumber === 1) {
      setRowCheck('SECOND_ROW_CHECK')
      setCurrentRow('SET_SECOND_ROW_CURRENT')
    } else if (rowNumber === 2) {
      setRowCheck('THIRD_ROW_CHECK')
      setCurrentRow('SET_THIRD_ROW_CURRENT')
    } else if (rowNumber === 3) {
      setRowCheck('FOURTH_ROW_CHECK')
      setCurrentRow('SET_FOURTH_ROW_CURRENT')
    } else if (rowNumber === 4) {
      setRowCheck('FIFTH_ROW_CHECK')
      setCurrentRow('SET_FIFTH_ROW_CURRENT')
    } else if (rowNumber === 5) {
      setRowCheck('SIXTH_ROW_CHECK')
      setCurrentRow('SET_SIXTH_ROW_CURRENT')
    }  
  },[rowNumber, currentWord, dispatch])

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
      dispatch({type: currentRow, payload: row})
      check(currentWord)
      setRowNumber(rowNumber + 1)
      dispatch({type: 'SET_CURRENT_WORD', payload: []})
    }
  }

  const check = (row) => {
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
        <div>{currentWord.length}, {rowNumber}</div>
        <div className={styles.row}>
          {firstRow.map((letter, i) => (
            <button key={i} disabled={rowNumber === 6? true : false} onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
        <div className={styles.row}>
          {secondRow.map((letter, i) => (
            <button key={i} disabled={rowNumber === 6? true : false} onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
        <div className={`${styles.row} ${styles.lastRow}`}>
          {thirdRow.map((letter, i) => (
            <button key={i} disabled={rowNumber === 6? true : false} onClick={() => taskChanger(letter)}>{letter}</button>
          ))}
        </div>
    </div> 
  )
}
