import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import CtaElement from '../../components/cta-element/cta-element';
import styles from './create-main.module.scss';


export default function CreateMainPage() {


  return (
    <main className={`base ${styles.mainpageDiv}`}>
      <Header />
      <CtaElement />
      <Footer />
    </main>
  );
}
