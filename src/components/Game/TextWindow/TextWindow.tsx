import { useRef, useState } from 'react';
import { langsData } from '../../Settings';
import styles from './TextWindow.module.scss';
import { getRandomNum } from '../../../utils/getRandomNum';

export interface TextWindowProps {
  text: string;
  lang: string;
  idx: number;
  isRightKey: boolean;
  isGame: boolean;
  setIsGame: React.Dispatch<React.SetStateAction<boolean>>,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setAccuracy: React.Dispatch<React.SetStateAction<number>>,
  setSpeed: React.Dispatch<React.SetStateAction<number>>,
  errorCount: number,
  time: number,
  keyLang: 'ru' | 'en',
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export function TextWindow({
  text,
  lang,
  idx,
  isRightKey,
  isGame,
  setIsGame,
  setTime,
  setAccuracy,
  setSpeed,
  errorCount,
  time,
  keyLang,
  setText,
}: TextWindowProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const { gameOverMessage, startMessage, continueMessage } = (langsData[lang]
    .pageGame.textWindow as { [key: string]: string });

  const massageRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);
  const blinkRef = useRef<HTMLElement>(null);
  const [inFocus, setInFocus] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | number>(0);

  const setCharToJSX = (
    char: string,
    classNames: string,
    ref: React.RefObject<HTMLElement> | null,
  ): JSX.Element =>
    <span key={randomIterableKey()} className={classNames} ref={ref}>{char}</span>;

  let newText: JSX.Element[] = text.split('').map((char, i): JSX.Element =>
    setCharToJSX(char, i === 0 ? `${styles.text} ${styles.blink}` : styles.text, null));

  const scroll = (): void => {
    if (blinkRef.current !== null) {
      blinkRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  };

  const blockingScroll = (e: KeyboardEvent) => {
    if (e.code === 'Space' && e.target === textAreaRef.current) {
      e.preventDefault();
    }
  };

  const setNewText = (className: string): JSX.Element[] => {
    const before = newText.slice(0, idx).map((el) => setCharToJSX(el.props.children, styles.right, null));
    const current = setCharToJSX(newText[idx < 0 ? 0 : idx].props.children, className, null);
    if (newText[idx + 2]) {
      const next = setCharToJSX(newText[idx + 1].props.children, `${styles.text} ${styles.blink}`, blinkRef);
      const after = newText.slice(idx + 2).map((jsxChar) => setCharToJSX(jsxChar.props.children, styles.text, null));
      console.log('🚀 ~ setNewText ~ [...before, current, next, ...after]:', [...before, current, next, ...after]);
      return [...before, current, next, ...after];
    }
    if (newText[idx + 1]) {
      const next = setCharToJSX(newText[idx + 1].props.children, `${styles.text} ${styles.blink}`, blinkRef);
      console.log('🚀 ~ setNewText ~ [...before, current, next]:', [...before, current, next]);
      return [...before, current, next];
    }

    console.log('🚀 ~ setNewText ~ [...before, current]:', [...before, current]);
    return [...before, current];
  };

  const setFocusToTextWindow = (): void => {
    if (textAreaRef.current !== null && massageRef.current !== null) {
      inFocus ? massageRef.current.textContent = continueMessage : textAreaRef.current.focus();
      setInFocus(!inFocus);
    }
    if (!inFocus) {
      window.removeEventListener('keydown', (e: KeyboardEvent) => blockingScroll(e));
    }
  };

  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId as NodeJS.Timeout);
      setIntervalId(0);
      console.log('Timer pause');
    }
  };

  const startTimer = () => {
    const newIntervalId: NodeJS.Timeout = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    // console.log('Timer start');
  };

  const startGame = (): void => {
    if (idx > -1) {
      const color = isRightKey ? styles.right : styles.wrong;
      const newTextJsx = setNewText(color);
      newText = newTextJsx;
      scroll();
    }
  };

  const endGame = (): void => {
    if (textAreaRef.current !== null && massageRef.current !== null) {
      textAreaRef.current.blur();
      massageRef.current.textContent = gameOverMessage;
      pauseTimer();
    }
  };

  const init = (): void => {
    window.addEventListener('keydown', (e: KeyboardEvent) => blockingScroll(e));

    if (!isRightKey || idx < text.length - 1) {
      setIsGame(true);
      setFocusToTextWindow();
    }
    if (!intervalId && idx === -1) {
      startTimer();
      setFocusToTextWindow();
    }

  };

  if (isGame) { startGame(); }
  else { endGame(); }

  if (idx >= 0 && !text[idx] && isRightKey) {
    endGame();
  }

  if (idx === - 1) {
    if (massageRef.current !== null) {
      massageRef.current.textContent = startMessage;
    }
  }

  return (
    <div
      className={styles.TextWindow}
    >
      <div
        className={styles.TextWindow__textContainer}
        ref={textAreaRef}
        onFocus={setFocusToTextWindow}
        onBlur={setFocusToTextWindow}
        tabIndex={0}
      >
        {newText}
      </div>
      <div
        ref={massageRef}
        className={inFocus ? styles.message : styles.message__active}
        onClick={init}
      >
        {startMessage}
      </div>
    </div>
  );
}
