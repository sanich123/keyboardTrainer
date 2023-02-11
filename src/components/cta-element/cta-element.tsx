import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import './cta-element.scss';

export default function CtaElement() {
  const { isRu, isLight } = useThemeLang();

  return (
    <div className="all-cta-div" style={{color: `${isLight ? '#000000' : '#FFFFFF'}`}}>
      <h1 className="h1-cta">Keyboard Racing</h1>
      <p className="p-cta">{isRu ? `Начни свою гонку! Узнай свою скорость печати
        и точность. Делай различные заезды, совершенствуй свои навыки и соревнуйся
        с другими. Попробуй разные языки, и смотри свои результаты в разделе
        "Статистика".`
        : `Start your race! Find out your typing speed and accuracy. Do various
        races, improve your skills and compete with others. Try different languages
        and see your results in the "Statistics" section.`}
      </p>
      <div className="btns-cta" style={{color: `${isLight ? '#FFFFFF' : '#000000'}`}}>
        <BtnSecondary text={isRu ? 'Правила' : 'Rules'}/>
        <Link to={ROUTES.game}>
          <BtnPrinary text={isRu ? 'Начать!' : 'Start now!'}/>
        </Link>
      </div>
    </div>

  );
}

