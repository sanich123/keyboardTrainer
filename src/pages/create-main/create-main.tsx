import './create-main.scss';
import Footer from '../../components/footer/footer';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import Header from '../../components/header/header';
import CtaElement from '../../components/cta-element/cta-element';
// import ModalRules from '../../components/modal-rules/modal';


export default function CreateMainPage() {
  const { isLight } = useThemeLang();


  return (
    <>
      {/* <ModalRules /> */}
      <div className={`mainpage-div ${isLight ? 'mainpage-div-light' : 'mainpage-div-darck'}`}>
        <Header />
        <CtaElement />
        <Footer />
      </div>
    </>
  );
}
