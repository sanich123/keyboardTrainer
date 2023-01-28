interface NumberInputProps {
  inputNumber: string,
  setInputNumber: (value: string) => void,
}

export function NumberInput({inputNumber, setInputNumber}: NumberInputProps) {
  return (
    <input
      type="number"
      value={inputNumber}
      onInput={({ target }) => target instanceof HTMLInputElement ? setInputNumber(target.value) : ''}
    />);
}
