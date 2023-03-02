import { useEffect } from 'react';
import { Game, Header, Footer } from '../../components';
import styles from './create-game.module.scss';

export default function CreateGamePage() {

  const blockingScroll = (e: KeyboardEvent) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => blockingScroll(e));
    return window.removeEventListener('keydown', (e: KeyboardEvent) => blockingScroll(e));
  }, []);

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
