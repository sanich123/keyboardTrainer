import { changeLanguage, changeTheme } from '../../redux/global-state/global-state';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './modal-settings.scss';


export default function ModalSettings() {

  const { dispatch, isRu } = useThemeLang();

  interface ModalProps {
    name: string
  }

  function BtnTheme( {name}: ModalProps) {
    return (
      <button className="btn-block"
        onClick={() => dispatch(changeTheme())}
      >
        <p className="btn-name">{ name }</p>
      </button>
    );
  }

  function BtnLang( {name}: ModalProps) {
    return (
      <button className="btn-block"
        onClick={() => dispatch(changeLanguage())}
      >
        <p className="btn-name">{ name }</p>
      </button>
    );
  }

  return (
    <div className="all-modal-settings">
      <BtnTheme
        name={isRu ? 'светлая / тёмная' : 'light / darck'}
      />
      <BtnLang
        name={isRu ? 'анг / рус' : 'eng / rus'}
      />
    </div>
  );
}
