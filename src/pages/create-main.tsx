import { changeLanguage, changeTheme } from '../redux/global-state/global-state';
import { useThemeLang } from '../utils/hooks/use-theme-lang/use-theme-lang';

export default function CreateMainPage() {
  const { dispatch, isRu, isLight } = useThemeLang();

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
