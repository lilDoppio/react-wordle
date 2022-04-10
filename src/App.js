import styles from '../src/App.module.scss'
import { Header } from './Components/Header/Header';
import { Keyboard } from './Components/Keyboard/Keyboard';
import { WordsContainer } from './Components/WordsContainer/WordsContainer';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <WordsContainer/>
      <Keyboard/>   
    </div>
  );
}

export default App;
