import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, changeTheme, GlobalStateType } from '../redux/global-state/global-state';

export default function CreateMainPage() {
  const dispatch = useDispatch();
  const { theme, language } = useSelector(({ globalState }:{globalState: GlobalStateType}) => globalState);
  const isRu = language === 'ru';
  const isLight = theme === 'light';
  return (
    <div style={{background: `${isLight ? 'grey' : 'blue'}`}}>
      <h1 className="text-3xl font-bold underline">
        {isRu ? 'Это самая главная страница' : 'This is the main page'}
      </h1>
      <button type="button" onClick={() => dispatch(changeTheme())}>
        {isRu ? 'Поменять тему' : 'Change theme'}
      </button>
      <button type="button" onClick={() => dispatch(changeLanguage())}>
        {isRu ? 'Поменять язык' : 'Change language'}
      </button>
    </div>
  );
}
