export interface TrafficLightProps {
  id: 'timer' | 'speed' | 'accuracy',
  color: 'red' | 'green' | 'yellow',
  textInfo: string | number,
  textDesc: string,
  unit: string,
}
