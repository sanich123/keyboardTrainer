import styles from './buttons.module.scss';

type TextBtn = {
  text: string
  setModal: (arg: boolean) => void
};

type TextBtnPr = {
  text: string
};

export function BtnSecondary({ text, setModal }: TextBtn) {
  return (
    <button
      className={styles.btnSecondary}
      onClick={() => setModal(true)}
    >
      {text}
    </button>
  );
}

export function BtnPrinary({ text }: TextBtnPr) {
  return (
    <button className={styles.btnPrimary} >{text}
    </button>
  );
}
