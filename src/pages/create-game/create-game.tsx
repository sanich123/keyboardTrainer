import { Game, Header, Footer } from '../../components';
import styles from './create-game.module.scss';

export default function CreateGamePage() {
  return (
    <>
      <Header />
      <div className={`base ${styles.CreateGamePage}`}>
        <Game />
      </div>
      <Footer />
    </>
  );
}
