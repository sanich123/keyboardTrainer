import { useEffect, useState } from 'react';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../../components/Settings';
import { TextWindow, TextWindowProps } from './TextWindow';
import { Keyboard, KeyboardProps } from './Keyboard';
import { TrafficLight, TrafficLightProps } from './TrafficLight';
import { Racing, RacingProps } from './Racing';
import { keys } from './TextWindow/specialKeys';
import styles from './Game.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import { useAddRaceDataMutation } from '../../redux/keyboard-trainer-api';

export function Game() {
  const text = {
    en: 'Lorem ipsum',
    ru: 'Пре',
  };
  const { isRu } = useThemeLang();
  const {user} = useAuth0();
  const [sendRaceData] = useAddRaceDataMutation();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const [errorCount, setErrorCount] = useState(0);
  const [isStoped, setIsStoped] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isRightKey, setIsRightKey] = useState(false);
  const [idx, setIdx] = useState(-1);
  const [keyLang, setKeyLang] = useState<'ru' | 'en'>('en');
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [wins, setWins] = useState(0);
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
  },[accuracy, isEnded, sendRaceData, speed, user?.nickname]);

  const setTimeToString = (
    min = 0,
    minPref = 0,
    sec = 0,
    secPref = 0,
    minRes = '',
    secRes = '',
  ): string => {
    sec = time;
    min = Math.floor(time / 60);
    sec = sec >= 60 ? time - (min * 60) : time;
    minRes = min < 10 ? `${minPref}${min}` : `${min}`;
    secRes = sec < 10 ? `${secPref}${sec}` : `${sec}`;
    return `${minRes}:${secRes}`;
  };

  const accuracyCount = Math.floor(((idx + 2) - errorCount) / (idx + 2) * 100);
  const speedCount = Math.floor((idx + 2) / (time / 60 || 1));
  console.log(speed, accuracy, wins);

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
      setErrorCount(0);
    }

    setSpeed(speedCount);
    setAccuracy(accuracyCount);
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

  const racingProps: RacingProps = {
    gameSpeed: 3,
    isGame,
    wins,
    setWins,
    lettersNum: text[keyLang].length,
    idx,
    setIsEnded,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userData = {
    date: new Date().toLocaleTimeString(),
    time,
    speed,
    accuracy,
    wins,
  };

  console.log('🚀 ~ checkWinner ~ wins', wins);

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
