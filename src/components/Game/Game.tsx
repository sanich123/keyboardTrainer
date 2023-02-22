import { useEffect, useState } from 'react';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { getRandomText } from './texts';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../../components/Settings';
import { TextWindow, TextWindowProps } from './TextWindow';
import { Keyboard, KeyboardProps } from './Keyboard';
import { TrafficLight, TrafficLightProps } from './TrafficLight';
import { Racing, RacingProps } from './Racing';
import { keys } from './TextWindow/specialKeys';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import { useAddRaceDataMutation } from '../../redux/keyboard-trainer-api';
import { setTimeToString } from '../../utils/setTimeToString';
import styles from './Game.module.scss';

export function Game() {
  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const [keyLang, setKeyLang] = useState<'ru' | 'en'>('en');
  const initRandomText = getRandomText(keyLang);
  const [text, setText] = useState(initRandomText);
  const { user } = useAuth0();
  const [sendRaceData] = useAddRaceDataMutation();
  const [errorCount, setErrorCount] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isRightKey, setIsRightKey] = useState(false);
  const [idx, setIdx] = useState(-1);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isEnded, setIsEnded] = useState(false);


  useEffect(() => {
    async function sendData() {
      return await sendRaceData({
        name: user?.nickname,
        speed,
        mistakes: accuracy,
        date: new Date(),
      })
        .unwrap()
        .then((success) => {
          console.log(success);
          toast.warn('Данные отправлены на сервер');
        })
        .catch((error) => {
          toast.warn('Во время передачи данных произошла ошибка');
          console.log(error);
        });
    }
    if (isEnded) {
      toast.warn('Гонка закончилась');
      sendData();
    }
  }, [accuracy, isEnded, sendRaceData, speed, user?.nickname]);

  const accuracyCount = Math.floor((idx + 2 - errorCount) / (idx + 2) * 100);
  const speedCount = Math.floor((idx + 2) / (time / 60 || 1));
  // console.log('speed:', speed, 'accuracy:', accuracy, 'speed:', speed);

  const checkKey = (e: React.KeyboardEvent<HTMLDivElement>)
    : boolean | string => {
    if (e.code === 'Backspace') { return 'Backspace'; }
    if (keys.some((specialKey: string) => specialKey === e.key)) {
      return 'isSpecialKey';
    }
    return e.key === text[idx + 1];
  };

  const onKeyUpHandle = (e: React.KeyboardEvent<HTMLDivElement>)
    : void | undefined => {

    if (!isGame) {
      return;
    }

    if (checkKey(e) === 'isSpecialKey') {
      return;
    }

    if (checkKey(e) === 'Backspace') {
      setIdx(idx > -1 ? idx - 1 : -1);
      setIsStoped(false);
      setIsRightKey(true);
      return;
    }

    if (isStoped) { return; }

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
      setErrorCount(0);
    }

    setSpeed(speedCount);
    setAccuracy(accuracyCount);
  };

  const trafficLightProps: TrafficLightProps[] = [
    {
      id: 'timer',
      color: 'red',
      textInfo: setTimeToString(time),
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
    char: text[idx + 1],
    lang,
    isRightKey,
    idx,
    setIdx,
    keyLang,
    setKeyLang,
    setTime,
    setText,
  };

  const textWindowProps: TextWindowProps = {
    text,
    lang,
    idx,
    isRightKey,
    isGame,
    setIsGame,
    setTime,
  };

  const racingProps: RacingProps = {
    gameSpeed: text.length / 100 * 60,
    isGame,
    lettersNum: text.length,
    idx,
    setIsEnded,
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
      <div className={styles.textWindow}>
        <TextWindow {...textWindowProps} />
      </div>
      <div className={styles.keyboard}>
        <Keyboard {...keyboardProps} />
      </div>
      <Racing {...racingProps} />
    </div>
  );
}
