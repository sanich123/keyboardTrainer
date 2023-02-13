import styles from './TrafficLight.module.scss';

export interface TrafficLightProps {
  id: number,
  color: 'red' | 'green' | 'yellow',
  textInfo: string,
  textDesc: string,
  unit: string,
}

export function TrafficLight({ id, color, textInfo, textDesc, unit }: TrafficLightProps) {
  return (
    <div className={`${styles.TrafficLight} TrafficLight-${id}`}>
      <div className={styles[`${color}Light`]}>
        <p className={styles[`${color}TextDesc`]}>
          {textDesc}
        </p>
        <div className={styles[color]}>
          <p className={styles[`${color}TextInfo`]}>
            {textInfo}
          </p>
          <p className={styles.unit}>
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
}
