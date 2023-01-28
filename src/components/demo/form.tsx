import { useState } from 'react';
import { NumberInput } from './input-number';
import { TextInput } from './input-text';

export default function FormInput() {
  const [inputText, setInputText] = useState('initialValue');
  const [inputNumber, setInputNumber] = useState('234');
  return (
    <form>
      <TextInput text={inputText} setInputText={setInputText} />
      <NumberInput
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
      />
    </form>);
}
