import { Game, Header, Footer } from '../../components';
import styles from './create-game.module.scss';

export default function CreateGamePage() {

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
    }
  });

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
