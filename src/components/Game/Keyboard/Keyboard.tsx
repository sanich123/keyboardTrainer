import React from 'react';
import { langsData } from '../../Settings';
import { useState } from 'react';
import { RiGamepadLine, RiKeyboardFill, RiTranslate } from 'react-icons/ri';
import { getRandomNum } from '../../../utils/getRandomNum';
import styles from './Keyboard.module.scss';
import './keyboardSVG.scss';
import { getRandomText } from '../texts';
import { KeyboardProps } from './Keyboard.props';
import { keyboardKeys } from './keyboardKeys';

export function Keyboard({ lang, char, isRightKey, idx, setIdx, keyLang, setKeyLang, setTime, setText }: KeyboardProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const { newGameBtn, hideShowKeyboardBtn } = langsData[lang].pageGame as { [key: string]: string; };
  const keyLangBtn = langsData[lang].pageGame.keyLangBtn as { ru: string, en: string };

  const [showKeyboard, setShowKeyboard] = useState(true);

  const onClicksHideShowKeyboardBtnHandler = () => setShowKeyboard(!showKeyboard);

  const onClicksKeyLangBtnHandler = () => {
    setIdx(-1);
    setTime(0);
    setText(getRandomText(keyLang === 'ru' ? 'en' : 'ru'));
    keyLang === 'ru' ? setKeyLang('en') : setKeyLang('ru');
  };

  const onClicksNewGameBtnHandler = () => {
    setIdx(-1);
    setTime(0);
    setText(getRandomText(keyLang));
  };

  const setKeyboard = (keys: JSX.Element[], letters: JSX.Element[]) => (
    <svg className="standard-kb" viewBox="0 0 683.3 254" xmlns="http://www.w3.org/2000/svg">
      <g id="keys" key={randomIterableKey()}>
        {[...keys]}
      </g>
      <g id="letters" key={randomIterableKey()}>
        {[...letters]}
      </g>
    </svg>
  );

  const setNewKeyboard = (nextLetter: string) => {
    let nextKey = nextLetter;
    if (nextLetter === ' ') { nextLetter = 'space'; nextKey = 'space'; }
    else if (nextLetter === ',') { nextKey = keyLang === 'en' ? 'comma' : 'slash'; }
    else if (nextLetter === '.') { nextKey = keyLang === 'en' ? 'dot' : 'slash'; }
    else if (nextLetter === '`') { nextKey = 'tilda'; }
    else if (nextLetter === '\'') { nextKey = 'quote'; }
    else if (nextLetter === '!') { nextKey = 'key-1'; }
    else if (nextLetter === '?') { nextKey = 'slash'; }
    else if (nextLetter === '-') { nextKey = 'minus'; }
    else if (nextLetter === '/') { nextKey = 'slash'; }
    else if (nextLetter === '~') { nextKey = 'tilda'; }
    else if (nextLetter === ':') { nextKey = keyLang === 'en' ? 'semicolon' : 'key-6'; }
    else if (nextLetter === ';') { nextKey = keyLang === 'en' ? 'semicolon' : 'key-4'; }
    else if (nextLetter === '"') { nextKey = keyLang === 'en' ? 'quote' : 'key-2'; }
    else if (nextLetter === '=') { nextKey = 'equal'; }
    else if (nextLetter === '{') { nextKey = 'open-bracket'; }
    else if (nextLetter === '\\') { nextKey = 'backslasht'; }

    const isUpperCase = nextLetter.toUpperCase() === nextLetter;

    const keys: JSX.Element[] = keyboardKeys[keyLang][0].props.children;
    const curKey: { key: JSX.Element, idx: number, up: boolean } = keys.reduce((acc, el, i) => {
      if (el.props.id === nextKey || el.props.id === nextKey.toLocaleLowerCase()) {
        acc.up = isUpperCase;
        acc.key = el;
        acc.idx = i;
      }
      return acc;
    }, {} as { key: JSX.Element, idx: number, up: boolean });

    const letters: JSX.Element[] = keyboardKeys[keyLang][1].props.children;
    const curLetter: { key: JSX.Element, idx: number, up: boolean } = letters.reduce((acc, el, i) => {
      const letter = el.props.children ? el.props.children : el.props.id.slice(5);
      if (letter === nextLetter || letter === nextLetter.toLocaleLowerCase()) {
        acc.up = isUpperCase;
        acc.key = el;
        acc.idx = i;
      }
      return acc;
    }, {} as { key: JSX.Element, idx: number, up: boolean });


    const keysBefore = keys.slice(0, curKey.idx);
    const keysAfter = keys.slice(curKey.idx + 1);
    const lettersBefore = letters.slice(0, curLetter.idx);
    const lettersAfter = letters.slice(curLetter.idx + 1);


    const newActiveKey: JSX.Element = React.createElement(
      curKey.key.type,
      { ...curKey.key.props, className: `${curKey.key.props.className} active`, key: randomIterableKey() },
    );

    const newActiveLetter: JSX.Element = React.createElement(
      curLetter.key.type,
      { ...curLetter.key.props, className: `${curLetter.key.props.className} active`, key: randomIterableKey() },
      curLetter.key.props.children,
    );

    return setKeyboard([...keysBefore, newActiveKey, ...keysAfter], [...lettersBefore, newActiveLetter, ...lettersAfter]);
  };

  let keyboard = setKeyboard(keyboardKeys[keyLang][0].props.children, keyboardKeys[keyLang][1].props.children);

  if ((char && isRightKey) || idx === -1) {
    keyboard = setNewKeyboard(char);
  }

  if (!isRightKey && idx !== -1) {
    keyboard = setNewKeyboard('backspace');
  }

  return (
    <div className={styles.Keyboard}>
      <div className={styles.switchButtons}>

        <button
          type="button"
          className={styles.hideShowKeyboardBtn}
          onClick={onClicksNewGameBtnHandler}
        >
          <RiGamepadLine className={styles.btnIcons} />
          {newGameBtn}
        </button>

        <button
          type="button"
          className={styles.hideShowKeyboardBtn}
          onClick={onClicksHideShowKeyboardBtnHandler}
        >
          <RiKeyboardFill className={styles.btnIcons} />
          {hideShowKeyboardBtn}
        </button>

        <button
          type="button"
          className={styles.hideShowKeyboardBtn}
          onClick={onClicksKeyLangBtnHandler}
        >
          <RiTranslate className={styles.btnIcons} />
          {keyLangBtn[keyLang]}
        </button>

      </div>

      <div className={showKeyboard ? styles.keyboardImg__active : styles.keyboardImg}>
        {keyboard}
      </div>

    </div>
  );
}
