import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import './cta-element.scss';

export default function CtaElement() {
  const { isRu, isLight } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';

  return (
    <div className="cta-block">
      <div className={`all-cta-div ${isLight ? 'light-theme-cta' : 'darck-theme-cta'}`}>
        <h1 className="h1-cta">Keyboard Racing</h1>
        <p className="p-cta">{`${langsData[lang].pageHome.ctaText}`}</p>
        <div className="btns-cta" style={{color: `${isLight ? '#FFFFFF' : '#000000'}`}}>
          <BtnSecondary text={isRu ? 'Правила' : 'Rules'}/>
          <Link to={ROUTES.game}>
            <BtnPrinary text={isRu ? 'Начать!' : 'Start now!'}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

