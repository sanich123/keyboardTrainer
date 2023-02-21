import { useRef } from 'react';
import { LazyMotion, domAnimation, m, useMotionValue } from 'framer-motion';
import startFinish from './img/start-finish.svg';
import userCar from './img/user-car.svg';
import car from './img/car.svg';
import styles from './Racing.module.scss';


export interface RacingProps {
  gameSpeed: number;
  isGame: boolean;
  wins: number,
  setWins: React.Dispatch<React.SetStateAction<number>>,
  lettersNum: number;
  idx: number;
  setIsEnded: (arg: boolean) => void,
}

export function Racing({ gameSpeed, isGame, wins, setWins, lettersNum, idx, setIsEnded }: RacingProps) {
  const userCarRef = useRef<HTMLImageElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const finishRef = useRef<HTMLImageElement>(null);
  const startRef = useRef<HTMLImageElement>(null);
  const carX = useMotionValue(0);
  const userCarX = useMotionValue(0);

  const moveCarsForward = (): void => {
    const startPos = (startRef.current as HTMLImageElement).getBoundingClientRect().x;
    const finishLine = (finishRef.current as HTMLImageElement).getBoundingClientRect().x;
    const finishLineWidth = (finishRef.current as HTMLImageElement).getBoundingClientRect().width;
    const carWidth = (carRef.current as HTMLImageElement).getBoundingClientRect().width;
    const tackWidth = finishLine - startPos;
    const finish = finishLineWidth + carWidth + 50;
    const nextPos = (((idx + 1) / lettersNum) * tackWidth) + finish;

    if (userCarX.get() <= tackWidth + finish) {
      userCarX.set(nextPos);
    }

    if (carX.get() <= tackWidth + finish) {
      carX.set(tackWidth + finish);
    }
  };


  const moveCarsToStart = () => {
    carX.set(0);
    userCarX.set(0);
  };

  const checkWinner = (): void => {
    const finishLine = (finishRef.current as HTMLImageElement).getBoundingClientRect().x;
    const finishLineWidth = (finishRef.current as HTMLImageElement).getBoundingClientRect().width;
    const carPos = (carRef.current as HTMLImageElement).getBoundingClientRect().x;
    const userCarPos = (userCarRef.current as HTMLImageElement).getBoundingClientRect().x;

    if (carPos >= (finishLine + finishLineWidth) && carPos > userCarPos) {
      console.log('!!!!!!!!!!!Winner: Enemy');
    } else if (!isGame && idx === lettersNum - 1) {
      console.log('!!!!!!!!!!!Winner: User');
      setIsEnded(true);
      // setIsWin(true);

      // setWins(wins + 1);
    }
  };

  if (idx > -1 && idx <= lettersNum + 2) {
    moveCarsForward();
    checkWinner();
  }

  if (idx === -1) {
    moveCarsToStart();
  }


  return (
    <div className={styles.Racing}>
      <div className={styles.road}>
        <img src={startFinish} alt="start-finish" className={styles.start} ref={startRef} />
        <LazyMotion features={domAnimation}>
          <m.img
            layout
            id="userCar"
            src={userCar}
            alt="car"
            className={styles.userCar}
            ref={userCarRef}
            style={{ x: userCarX }}
          />
        </LazyMotion>
        <img src={startFinish} alt="start-finish" className={styles.finish} ref={finishRef} />
      </div>

      <div className={styles.road}>
        <img src={startFinish} alt="start-finish" className={styles.start} />
        <LazyMotion features={domAnimation} strict>
          <m.img
            id="car"
            src={car}
            alt="car"
            className={styles.car}
            ref={carRef}
            style={{
              transition: isGame && idx > -1 ? `${gameSpeed}s linear` : `${.6}s ease-in-out`,
              x: carX,
            }}
          />
        </LazyMotion>
        <img src={startFinish} alt="start-finish" className={styles.finish} />
      </div>

    </div>
  );
}
