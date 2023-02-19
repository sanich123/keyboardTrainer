import Settings, { Game } from '../../components';
import styles from './create-game.module.scss';

export default function CreateGamePage() {
  return (
    <div className={`${styles.CreateGamePage}`}>
      <Settings />
      <Game />
    </div>
  );
}
