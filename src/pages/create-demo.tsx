import { useEffect, useState } from 'react';
import { TextInput } from '../components/demo/input-text';
import { NumberInput } from '../components/demo/input-number';
import FormInput from '../components/demo/form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementValue, incrementValue } from '../redux/increment-decrement/increment-decrement';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/const';
import Insect from '../img/insect.webp';
import '../components/demo/demo-page.scss';

interface IncDecState {
  incrementDecrement: {
    value: number,
  }
}

export default function CreateDemo() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('initialValue');
  const [inputNumber, setInputNumber] = useState('234');
  const {value: reduxValue} = useSelector(({incrementDecrement}: IncDecState) => incrementDecrement);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async function getTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
      setData(todos);
    })();
    if (reduxValue === 5) {navigate(ROUTES.game);}
    // getTodos();
  }, [navigate, reduxValue]);

  if (!data.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data.length > 0 &&
        data.slice(0, 20).map(({ id, title }) => (
          <li className="todo-li" key={id} onClick={({ target }) => console.log(target)}>
            {title}
          </li>
        ))}
      {<FormInput />}
      <form>
        <TextInput text={inputText} setInputText={setInputText} />
        <NumberInput
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
        />
      </form>
      <button type="button" onClick={() => dispatch(incrementValue())}>Increment</button>
      <span>{reduxValue}</span>
      <button type="button" onClick={() => dispatch(decrementValue())}>Decrement</button>
      <Link to={ROUTES.main}>
        Сюда можно жмякнуть, чтобы перейти на главную
      </Link>
      <img src={Insect} alt="some img"/>
    </>
  );
}
