import { useRef, useState } from 'react';
import { getRandomNum } from '../../utils/getRandomNum';
import { keys } from './specialKeys';
import styles from './TextWindow.module.scss';

export interface TextWindowProps {
  lessonText: string;
}


export function TextWindow({ lessonText }: TextWindowProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const setCharToJSX = (char: string, classNames: string): JSX.Element =>
    <span key={randomIterableKey()} className={classNames}>{char}</span>;

  const TextWindowReference = useRef<HTMLDivElement>(null);
  const outFocusReference = useRef<HTMLDivElement>(null);
  const textAreaReference = useRef<HTMLDivElement>(null);

  const textJsxArr: JSX.Element[] = lessonText.split('').map((char: string, i): JSX.Element =>
    i === 0 ? setCharToJSX(char, `${styles.text} ${styles.blink}`) : setCharToJSX(char, styles.text));
  const [text, setText] = useState(textJsxArr);
  const [errorCount, setErrorCount] = useState(0);
  const [idx, setIdx] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [focused, setFocused] = useState(false);
  // const [time, setTime] = useState(0);


  // const scroll = (target: Ref<T>) =>
  //   (target as T).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

  // const setBlinkCarret = (char: string, status: string) => {
  //   char
  // };

  const checkKey = (e: React.KeyboardEvent<HTMLDivElement>): boolean | undefined | string => {
    if (text.length === idx) { return 'endGame'; }
    if (e.code === 'Backspace') { return 'Backspace'; }
    if (keys.some((specialKey: string) => specialKey === e.key)) { return 'isSpecialKey'; }
    return e.key === (text[idx].props.children as string);
  };

  const setNewText = (className: string, isBack?: boolean): JSX.Element[] => {
    // eslint-disable-next-line no-nested-ternary
    const i = isBack ? (idx > 0 ? idx - 1 : 0) : idx;
    const before = text.slice(0, i).map((el: JSX.Element) => setCharToJSX(el.props.children, styles.right));
    const current = setCharToJSX(text[i].props.children, isBack ? `${className} ${styles.blink}` : className);
    const next = setCharToJSX(text[i + 1].props.children, isBack ? styles.text : `${styles.text} ${styles.blink}`);
    const after = text.slice(i + 2).map((jsxChar: JSX.Element) => setCharToJSX(jsxChar.props.children, styles.text));
    const newText = [...before, current, next, ...after];
    return newText;
  };

  const onKeyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (checkKey(e) === 'endGame') {
      gameEnd();
      return;
    }

    if (checkKey(e) === 'isSpecialKey') { return; }

    if (isStoped === false && checkKey(e) === true) {
      setIdx(idx + 1);
      const newText = setNewText(styles.right);
      setText(newText);
      // scroll();
      return;
    }

    if (checkKey(e) === 'Backspace') {
      setIdx(idx > 1 ? idx - 1 : 0);
      setErrorCount(errorCount > 0 ? errorCount - 1 : 0);
      const newText = setNewText(styles.text, true);
      setText(newText);
      setIsStoped(false);
      return;
    }

    if (isStoped) { return; }

    const newText = setNewText(styles.wrong);
    setText(newText);
    setErrorCount(errorCount + 1);
    setIdx(idx + 1);
    setIsStoped(true);
    // scroll();
  };

  const gameEnd = (): void => {
    setIsStoped(true);
    (outFocusReference.current as HTMLDivElement).textContent = 'Game Over';
    setFocused(false);
  };

  const setFocusToTextWindow = (): void => {
    if (textAreaReference.current !== null && outFocusReference.current !== null) {
      if (!focused) {
        textAreaReference.current.focus();
        setFocused(true);
      } else {
        outFocusReference.current.textContent = 'Click me to continue';
        setFocused(false);
      }
    }
  };

  // const setGameTimer = (status: 'start' | 'stop' | 'pause' | 'unpause'): void => {
  //   if (status === 'start') {
  //     setTime(0);
  //   }
  //   if (status === 'stop') {
  //     setTime(0);
  //   }
  //   if (status === 'pause') {
  //     setTime(time);
  //   }
  //   if (status === 'unpause') {
  //     setTime(0);
  //   }
  // };

  // useEffect(() => {
  //   const area = textAreaReference.current;
  //   if (area !== null) {
  //     area.scrollTop = area.scrollHeight;
  //   }
  // });

  return (
    <div
      className={styles.TextWindow}
      ref={TextWindowReference}
    >
      <div
        className={styles.TextWindow__textContainer}
        ref={textAreaReference}
        tabIndex={0}
        onKeyUp={(e) => onKeyUpHandle(e)}
      >
        {text}
      </div>
      <div
        ref={outFocusReference}
        className={focused ? styles.outFocus : styles.outFocus__active}
        onClick={setFocusToTextWindow}
      >
        Click me to start
      </div>
    </div>
  );
}
