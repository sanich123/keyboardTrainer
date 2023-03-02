export interface TextWindowProps {
  text: string;
  lang: string;
  idx: number;
  isRightKey: boolean;
  isGame: boolean;
  setIsGame: React.Dispatch<React.SetStateAction<boolean>>,
  setTime: React.Dispatch<React.SetStateAction<number>>,
}
