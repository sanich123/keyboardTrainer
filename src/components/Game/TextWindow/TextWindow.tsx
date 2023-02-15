import { useRef, useState } from 'react';
import { langsData } from '../../Settings';
import styles from './TextWindow.module.scss';
import { getRandomNum } from '../../../utils/getRandomNum';

export interface TextWindowProps {
  lessonText: string;
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
}

export function TextWindow({
  lessonText,
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
}: TextWindowProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const { gameOverMessage, startMessage, continueMessage } = (langsData[lang]
    .pageGame.textWindow as { [key: string]: string });

  const massageRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);
  const blinkRef = useRef<HTMLSpanElement>(null);

  const [inFocus, setInFocus] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | number>(0);

  const setCharToJSX = (char: string, classNames: string): JSX.Element =>
    <span key={randomIterableKey()} className={classNames}>{char}</span>;

  let text: JSX.Element[] = lessonText.split('').map((char, i): JSX.Element =>
    setCharToJSX(char, i === 0 ? `${styles.text} ${styles.blink}` : styles.text));

  const scroll = (): void => {
    if (blinkRef.current !== null) {
      blinkRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const setNewText = (className: string): JSX.Element[] => {
    const before = text.slice(0, idx).map((el) => setCharToJSX(el.props.children, styles.right));
    const current = setCharToJSX(text[idx < 0 ? 0 : idx].props.children, className);
    if (text[idx + 2]) {
      const next = setCharToJSX(text[idx + 1].props.children, `${styles.text} ${styles.blink}`);
      const after = text.slice(idx + 2).map((jsxChar) => setCharToJSX(jsxChar.props.children, styles.text));
      return [...before, current, next, ...after];
    }
    if (text[idx + 1]) {
      const next = setCharToJSX(text[idx + 1].props.children, `${styles.text} ${styles.blink}`);
      return [...before, current, next];
    }

    return [...before, current];
  };

  const setFocusToTextWindow = (): void => {
    if (textAreaRef.current !== null && massageRef.current !== null) {
      inFocus ? massageRef.current.textContent = continueMessage : textAreaRef.current.focus();
      setInFocus(!inFocus);
    }
    pauseTimer();
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
    console.log('Timer start');

  };

  const startGame = (): void => {
    if (idx > -1) {
      const color = isRightKey ? styles.right : styles.wrong;
      const newText = setNewText(color);
      text = newText;
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
    if (!isRightKey || idx < text.length - 1) {
      setIsGame(true);
      setFocusToTextWindow();
    }
    if (!intervalId && idx === -1) {
      setFocusToTextWindow();
      startTimer();
    }
  };

  const speedCount = () => {
    const timeInMin = Math.ceil(time / 60);
    const charPerMin = ((lessonText.length - errorCount) + errorCount) / timeInMin;
    const charPerMinClear = charPerMin - (errorCount / timeInMin);
    return charPerMinClear;
  };
  const accurancyCount = () => errorCount / lessonText.length * 100;

  console.log('🚀 ~ speedCount ~ speedCount', speedCount());
  console.log('🚀 ~ accurancyCount', accurancyCount());

  if (isGame) { startGame(); }
  else {
    endGame();
  }

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
        {text}
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
