import { Game, Settings, Header, Footer } from '../../components';
import styles from './create-game.module.scss';

export default function CreateGamePage() {
  return (
    <div className={`${styles.CreateGamePage}`}>
      <Header />
      <Settings />
      <Game />
      <Footer />
    </div>
  );
}
