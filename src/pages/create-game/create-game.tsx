import Settings, { TrafficLight } from '../../components';
import { TrafficLightProps } from '../../components/TrafficLight';
import styles from './create-game.module.scss';

export default function CreateGamePage() {
  const redProps: TrafficLightProps = {
    color: 'red',
    textInfo: '01:22',
    textDesc: 'Elapsed time',
    unit: 'min',
  };

  const greenProps: TrafficLightProps = {
    color: 'green',
    textInfo: '120',
    textDesc: 'Speed',
    unit: 'chars/min',
  };

  const yellowProps: TrafficLightProps = {
    color: 'yellow',
    textInfo: '100%',
    textDesc: 'Accuracy',
    unit: '%',
  };

  return (
    <div id="CreateGamePage">
      <Settings />
      <div className={`trafficLight ${styles.trafficLight}`}>
        <TrafficLight {...redProps} />
        <TrafficLight {...greenProps} />
        <TrafficLight {...yellowProps} />
      </div>
    </div>
  );
}
