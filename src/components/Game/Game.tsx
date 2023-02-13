import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../../components/Settings';
import { TextWindow, TextWindowProps } from './TextWindow';
import { Keyboard, KeyboardProps } from './Keyboard';
import { TrafficLight, TrafficLightProps } from './TrafficLight';
import styles from './Game.module.scss';
import { useState } from 'react';
import { keys } from './TextWindow/specialKeys';


export function Game() {
  const text = 'lorem';
  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const [errorCount, setErrorCount] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isRightKey, setIsRightKey] = useState(false);
  const [idx, setIdx] = useState(-1);
  // const nexRef = useRef<SVGSVGElement>(null);

  const trafficLightProps: TrafficLightProps[] = [
    {
      id: 1,
      color: 'red',
      textInfo: '01:22',
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTime}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTimeUnit}`,
    },
    {
      id: 2,
      color: 'yellow',
      textInfo: '100',
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speed}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speedUnit}`,
    },
    {
      id: 3,
      color: 'green',
      textInfo: '120',
      textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracy}`,
      unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracyUnit}`,
    },
  ];

  const keyboardProps: KeyboardProps = {
    lang: lang,
  };

  const textWindowProps: TextWindowProps = {
    lessonText: text,
    lang: lang,
    idx: idx,
    isRightKey: isRightKey,
    isGame: isGame,
    setIsGame: setIsGame,
  };

  const checkKey = (e: React.KeyboardEvent<HTMLDivElement>): boolean | string => {
    if (e.code === 'Backspace') { return 'Backspace'; }
    if (keys.some((specialKey: string) => specialKey === e.key)) { return 'isSpecialKey'; }
    return e.key === text[idx + 1];
  };

  const onKeyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>): void | undefined => {
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

    if (checkKey(e) && idx >= text.length - 2) {
      setIsGame(false);
    }
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
