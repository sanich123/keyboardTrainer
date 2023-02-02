import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, changeTheme, GlobalStateType } from '../redux/global-state/global-state';

export default function CreateUserCabinet() {
  const dispatch = useDispatch();
  const { theme, language } = useSelector(
    ({ globalState }: { globalState: GlobalStateType }) => globalState,
  );
  const isRu = language === 'ru';
  const isLight = theme === 'light';
  return (
    <div style={{ background: `${isLight ? 'grey' : 'blue'}` }}>
      <button type="button" onClick={() => dispatch(changeTheme())}>
        {isRu ? 'Поменять тему' : 'Change theme'}
      </button>
      <button type="button" onClick={() => dispatch(changeLanguage())}>
        {isRu ? 'Поменять язык' : 'Change language'}
      </button>
    </div>
  );
}
