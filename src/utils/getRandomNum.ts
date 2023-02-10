export const getRandomNum = (min: number, max: number): () => number => {
  const randomNums: number[] = [];
  return function random(): number {
    const r = Math.floor(Math.random() * (max - min + 1) + min) + 1;
    // if (randomNums.includes(r)) { random(); }
    // randomNums.push(r);
    randomNums.includes(r)
      ? random()
      : randomNums.push(r);
    return r;
  };
};
