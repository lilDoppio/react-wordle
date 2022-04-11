import { useSelector } from 'react-redux';
import { Header } from './Components/Header/Header';
import { Keyboard } from './Components/Keyboard/Keyboard';
import { WordsContainer } from './Components/WordsContainer/WordsContainer';

import styles from '../src/App.module.scss'

function App() {
  const checkWord = useSelector(state => state.currentWord.checkWord)
  const gameStatus = useSelector(state => state.currentWord.gameStatus)

  console.log(gameStatus)
  return (
    <div className={styles.App}>
      {(checkWord.length === 5  || gameStatus === 0) &&
      <div className={styles.statusWindow}>
        <div className={styles.statusInfo}>
          {gameStatus
          ?
          <div className={styles.statusText}>
            <h1>Победа</h1>
            <p>Поздравляю, вы прошли игру!</p>
          </div>
          :
          <div className={styles.statusText}>
            <h1>Поражение</h1>
            <p>Не переживайте, можете попробовать еще раз.</p>
          </div>}
        </div>
      </div>}
      <Header/>
      <WordsContainer/>
      <Keyboard/>   
    </div>
  );
}

export default App;
