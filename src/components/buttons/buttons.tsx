import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './buttons.scss';

type TextBtn = {
  text: string
};

export function BtnSecondary(text: TextBtn) {
  const { isLight } = useThemeLang();

  return (
    <button className={`btn-secondary ${isLight ? 'btn-secondary-light' : 'btn-secondary-darck'}`}>{text.text}</button>
  );
}

export function BtnPrinary(text: TextBtn) {
  const { isLight } = useThemeLang();

  return (
    <button className={`btn-primary ${isLight ? 'btn-primary-light' : 'btn-primary-darck'}`} >{text.text}
    </button>
  );
}
