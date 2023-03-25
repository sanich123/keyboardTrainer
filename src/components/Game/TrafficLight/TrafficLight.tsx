import styles from './TrafficLight.module.scss';
import { TrafficLightProps } from './TrafficLight.props';

export function TrafficLight({ id, color, textInfo, textDesc, unit }: TrafficLightProps) {
  return (
    <div id={`TrafficLight-${id}`} className={`${styles.TrafficLight}`}>
      <div className={styles[`${color}Light`]}>
        <p className={styles[`${color}TextDesc`]}>
          {textDesc}
        </p>
        <div className={styles[color]}>
          <p className={styles[`${color}TextInfo`]}>
            {`${textInfo}`}
          </p>
          <p className={styles.unit}>
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
}
