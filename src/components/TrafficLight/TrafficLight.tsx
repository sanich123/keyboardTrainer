import React from 'react';
import styles from './TrafficLight.module.scss';

export interface TrafficLightProps {
  color: 'red' | 'green' | 'yellow',
  textInfo: string,
  textDesc: string,
  unit: string,
}

export function TrafficLight({ color, textInfo, textDesc, unit }: TrafficLightProps) {
  return (
    <div className={`${styles.TrafficLight} TrafficLight-${color}`}>
      <div className={styles[`${color}Light`]}>
        <div className={styles.unitWrapper}>
          <p className={styles[`${color}TextDesc`]}>
            {textDesc}
          </p>
          <p className={styles.unit}>
            {unit}
          </p>
        </div>
        <div className={styles[color]}>
          <p className={styles[`${color}TextInfo`]}>
            {textInfo}
          </p>
        </div>
      </div>
    </div>
  );
}
