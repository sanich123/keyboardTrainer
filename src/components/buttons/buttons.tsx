import styles from './buttons.module.scss';

type TextBtn = {
  text: string
};

export function BtnSecondary(text: TextBtn) {
  return (
<<<<<<< HEAD
    <button className={`btn-secondary ${isLight ? 'btn-secondary-light' : 'btn-secondary-darck'}`}>{text.text}</button>
=======
    <button className={styles.btnSecondary}>{text.text}</button>
>>>>>>> develop
  );
}

export function BtnPrinary(text: TextBtn) {
  return (
<<<<<<< HEAD
    <button className={`btn-primary ${isLight ? 'btn-primary-light' : 'btn-primary-darck'}`} >{text.text}
=======
    <button className={styles.btnPrimary} >{text.text}
>>>>>>> develop
    </button>
  );
}
