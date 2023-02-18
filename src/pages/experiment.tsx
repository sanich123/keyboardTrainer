import { useState } from 'react';
import './experiment.css';

export default function Experiment() {
  const [start, setStart] = useState(false);
  const [moveRight, setMoveRight] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setStart(true)}>Start</button>
      <div className={start ? 'car1' : ''}>Car1</div><br></br>
      <div style={{transform: `translateX(${moveRight}px)`}}>Car2</div><br></br>
      <button type="button" onClick={() => setMoveRight(moveRight + 15)}>button R</button>
    </>
  );
}
