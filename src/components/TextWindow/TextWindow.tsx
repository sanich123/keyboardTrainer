import { useRef, useState } from 'react';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { getRandomNum } from '../../utils/getRandomNum';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../Settings';
import { keys } from './specialKeys';
import styles from './TextWindow.module.scss';

export interface TextWindowProps {
  lessonText: string;
}


export function TextWindow({ lessonText }: TextWindowProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const setCharToJSX = (char: string, classNames: string, ref?: React.RefObject<HTMLSpanElement>): JSX.Element =>
    <span key={randomIterableKey()} className={classNames} ref={ref}>{char}</span>;

  const TextWindowReference = useRef<HTMLDivElement>(null);
  const outFocusReference = useRef<HTMLDivElement>(null);
  const textAreaReference = useRef<HTMLDivElement>(null);

  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const { gameOverMessage, startMessage, continueMessage } = (langsData[lang].pageGame.textWindow as { [key: string]: string });

  const textJsxArr: JSX.Element[] = lessonText.split('').map((char: string, i): JSX.Element =>
    i === 0 ? setCharToJSX(char, `${styles.text} ${styles.blink}`) : setCharToJSX(char, styles.text));
  const [text, setText] = useState(textJsxArr);
  const [errorCount, setErrorCount] = useState(0);
  const [idx, setIdx] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [focused, setFocused] = useState(false);
  const blinkReference = useRef<HTMLSpanElement>(null);


  const scroll = (): void => {
    if (blinkReference.current !== null) {
      blinkReference.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const checkKey = (e: React.KeyboardEvent<HTMLDivElement>): boolean | undefined | string => {
    if (e.code === 'Backspace') { return 'Backspace'; }
    if (keys.some((specialKey: string) => specialKey === e.key)) { return 'isSpecialKey'; }
    return e.key === (text[idx].props.children as string);
  };

  const setNewText = (className: string, isBack?: boolean): JSX.Element[] => {
    // eslint-disable-next-line no-nested-ternary
    const i = isBack ? (idx > 0 ? idx - 1 : 0) : idx;
    const before = text.slice(0, i).map((el: JSX.Element) => setCharToJSX(el.props.children, styles.right));

    if (text[i + 2] && text.slice(i + 3)) {
      const current = setCharToJSX(text[i].props.children, isBack ? `${className} ${styles.blink}` : className);
      const next = setCharToJSX(text[i + 1].props.children, isBack ? styles.text : `${styles.text} ${styles.blink}`);
      const toScroll = setCharToJSX(text[i + 2].props.children, isBack ? styles.text : styles.text, blinkReference);
      const after = text.slice(i + 3).map((jsxChar: JSX.Element) => setCharToJSX(jsxChar.props.children, styles.text));
      const newText = [...before, current, next, toScroll, ...after];
      return newText;
    } if (text[i + 1]) {
      const current = setCharToJSX(text[i].props.children, isBack ? `${className} ${styles.blink}` : className);
      const next = setCharToJSX(text[i + 1].props.children, isBack ? styles.text : `${styles.text} ${styles.blink}`);
      const newText = [...before, current, next];
      return newText;
    } else {
      const current = setCharToJSX(text[i].props.children, styles.right);
      const newText = [...before, current];
      setGameOver();
      return newText;
    }
  };

  const onKeyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (checkKey(e) === 'isSpecialKey') { return; }

    if (isStoped === false && checkKey(e) === true) {
      setIdx(idx + 1);
      const newText = setNewText(styles.right);
      setText(newText);
      scroll();
      return;
    }

    if (checkKey(e) === 'Backspace') {
      setIdx(idx > 1 ? idx - 1 : 0);
      setErrorCount(errorCount > 0 ? errorCount - 1 : 0);
      const newText = setNewText(styles.text, true);
      setText(newText);
      setIsStoped(false);
      scroll();
      return;
    }

    if (isStoped) { return; }

    const newText = setNewText(styles.wrong);
    setText(newText);
    setErrorCount(errorCount + 1);
    setIdx(idx + 1);
    setIsStoped(true);
  };

  const setGameOver = (): void => {
    if (outFocusReference.current !== null) { outFocusReference.current.textContent = gameOverMessage; }
    setIsStoped(true);
    setFocused(false);
  };

  const setFocusToTextWindow = (): void => {
    if (textAreaReference.current !== null && outFocusReference.current !== null) {
      if (!focused) {
        textAreaReference.current.focus();
        setFocused(true);
      } else {
        outFocusReference.current.textContent = continueMessage;
        setFocused(false);
      }
    }
  };

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
        {startMessage}
      </div>
    </div>
  );
}
