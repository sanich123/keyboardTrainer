import styles from './buttons.module.scss';

type TextBtn = {
  text: string
};

export function BtnSecondary(text: TextBtn) {
  return (
    <button className={styles.btnSecondary}>{text.text}</button>
  );
}

export function BtnPrinary(text: TextBtn) {
  return (
    <button className={styles.btnPrimary} >{text.text}
    </button>
  );
}
