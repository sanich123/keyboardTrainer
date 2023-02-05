import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './buttons.scss';

type TextBtn = {
  text: string
};

export function BtnSecondary(text: TextBtn) {

  const { isLight } = useThemeLang();

  return (
    <button className="btn-secondary" style={{backgroundColor: `${isLight ? '#514B4B' : '#F0B1B1'}`}}>{text.text}</button>
  );
}

export function BtnPrinary(text: TextBtn) {

  const { isLight } = useThemeLang();

  return (
    <button className="btn-primary" style={{backgroundColor: `${isLight ? '#E21022' : '#F2F2F2'}`}}>{text.text}
    </button>
  );
}
