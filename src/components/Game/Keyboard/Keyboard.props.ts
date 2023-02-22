export interface KeyboardProps {
  lang: string;
  char: string;
  isRightKey: boolean;
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>,
  keyLang: 'ru' | 'en',
  setKeyLang: React.Dispatch<React.SetStateAction<'ru' | 'en'>>,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
}
