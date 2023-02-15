import { useState } from 'react';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../../components/Settings';
import { TextWindow, TextWindowProps } from './TextWindow';
import { Keyboard, KeyboardProps } from './Keyboard';
import { TrafficLight, TrafficLightProps } from './TrafficLight';
import { keys } from './TextWindow/specialKeys';
import styles from './Game.module.scss';

export function Game() {
  const text = {
    en: 'Lorem',
    ru: 'Пре',
  };
  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const [errorCount, setErrorCount] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isRightKey, setIsRightKey] = useState(false);
  const [idx, setIdx] = useState(-1);
  const [keyLang, setKeyLang] = useState<'ru' | 'en'>('en');
  const [time, setTime] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [speed, setSpeed] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accuracy, setAccuracy] = useState(0);

  const checkKey = (e: React.KeyboardEvent<HTMLDivElement>)
    : boolean | string => {
    if (e.code === 'Backspace') { return 'Backspace'; }
    if (keys.some((specialKey: string) => specialKey === e.key)) {
      return 'isSpecialKey';
    }
    return e.key === text[keyLang][idx + 1];
  };

  const onKeyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>)
    : void | undefined => {
    if (isGame === false) {
      return;
    }

    // if special kes pressed
    if (checkKey(e) === 'isSpecialKey') {
      return;
    }

    // if Backspace key pressed
    if (checkKey(e) === 'Backspace') {
      setIdx(idx > -1 ? idx - 1 : -1);
      setIsStoped(false);
      setIsRightKey(true);
      return;
    }

    // if game stoped
    if (isStoped) { return; }

    // if right key pressed
    if (checkKey(e)) {
      setIdx(idx + 1);
      setIsRightKey(true);
    } else {
      setIdx(idx + 1);
      setErrorCount(errorCount + 1);
      setIsRightKey(false);
      setIsStoped(true);
    }

    if (checkKey(e) && idx >= text[keyLang].length - 2) {
      setIsGame(false);
      // setTime(0);
    }
  };

  const setTimeToString = (
    min = 0,
    minPref = 0,
    sec = 0,
    secPref = 0,
    minRes = '',
    secRes = '',
  ) => {
    sec = time;
    min = Math.floor(time / 60);
    sec = sec >= 60 ? time - (min * 60) : time;
    minRes = min < 10 ? `${minPref}${min}` : `${min}`;
    secRes = sec < 10 ? `${secPref}${sec}` : `${sec}`;
    console.log(`${minRes}:${secRes}`, time);
    return `${minRes}:${secRes}`;
  };

  const trafficLightProps: TrafficLightProps[] = [
    {
      id: 'timer',
      color: 'red',
      textInfo: setTimeToString(),
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTime}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTimeUnit}`,
    },
    {
      id: 'speed',
      color: 'yellow',
      textInfo: speed,
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speed}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speedUnit}`,
    },
    {
      id: 'accuracy',
      color: 'green',
      textInfo: accuracy,
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracy}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracyUnit}`,
    },
  ];

  const keyboardProps: KeyboardProps = {
    char: text[keyLang][idx + 1],
    lang,
    isRightKey,
    idx,
    setIdx,
    keyLang,
    setKeyLang,
    setTime,
  };

  const textWindowProps: TextWindowProps = {
    lessonText: text[keyLang],
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
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userData = {
    date: new Date().toLocaleTimeString(),
    time,
    speed,
    accuracy,
  };

  return (
    <div
      className={styles.Game}
      onKeyUp={(e) => onKeyUpHandle(e)}
    >
      <div className={`trafficLight ${styles.trafficLight}`}>
        {trafficLightProps.map((prop: TrafficLightProps) =>
          <TrafficLight key={`${prop.id}`} {...prop} />)}
      </div>

      <TextWindow {...textWindowProps} />
      <Keyboard {...keyboardProps} />
    </div>
  );
}
