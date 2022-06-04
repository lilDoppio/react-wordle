import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './Components/Header/Header';
import { Keyboard } from './Components/Keyboard/Keyboard';
import { WordsContainer } from './Components/WordsContainer/WordsContainer';
import { PopupWindow } from './Components/UI/PopupWindow/PopupWindow';

import styles from '../src/App.module.scss'

function App() {
  const currentWord = useSelector(state => state.currentWord)
  const popup = useSelector(state => state.popup)
  const [title , setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (currentWord.gameStatus) {
      setTitle('Победа')
      setDescription('Поздравляю, вы прошли игру!')
    } else {
      setTitle('Поражение')
      setDescription('Не переживайте, можете попробовать еще раз.')
    }
  }, [currentWord.gameStatus])

  return (
    <div className={styles.App}>
      <PopupWindow hidden={popup.instruction}/>
      <PopupWindow hidden={popup.information}/>
      {(currentWord.checkWord.length === 5  || currentWord.gameStatus === 0) &&
      <PopupWindow title={title} description={description}/>}
      <Header/>
      <WordsContainer/>
      <Keyboard/>   
    </div>
  );
}

export default App;
