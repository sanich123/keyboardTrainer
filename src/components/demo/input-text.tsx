import '../demo/input-text.scss';

type InputTextProps = {
  text: string,
  setInputText: (value: string) => void,
}

export function TextInput({text, setInputText}: InputTextProps) {
  return (
    <input
      className="text-input"
      type="text"
      value={text}
      onInput={({ target }) => {
        if (target instanceof HTMLInputElement) {
          const { value } = target;
          setInputText(value);
        }
      }}
    />);
}
