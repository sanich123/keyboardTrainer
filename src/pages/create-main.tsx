import './create-main.scss';
import BgLight from '../assets/img/bg-light.png';
import BgDark from '../assets/img/bg-dark.png';
import Footer from '../components/footer/footer';
import { useThemeLang } from '../utils/hooks/use-theme-lang/use-theme-lang';
import Header from '../components/header/header';
import CtaElement from '../components/cta-element/cta-element';

export default function CreateMainPage() {
  const { isLight } = useThemeLang();

  return (
    <div className="mainpage-div"
      style={{ background: `url(${isLight ? BgLight : BgDark})`,
        backgroundSize: 'cover'}}
    >
      <Header />
      <CtaElement />
      <Footer />
    </div>
  );
}
