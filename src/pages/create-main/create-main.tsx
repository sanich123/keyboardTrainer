import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import CtaElement from '../../components/cta-element/cta-element';
import styles from './create-main.module.scss';
import { useState } from 'react';
import ModalRules from '../../components/modal-rules/modal';
import { FocusOn } from 'react-focus-on';


export default function CreateMainPage() {

  const [ modal, setModal ] = useState(false);

  return (
    <>
      {modal && (
        <FocusOn onEscapeKey={() => setModal(false)}>
          <ModalRules setModal={setModal} />
        </FocusOn>
      )}
      <main className={`base ${styles.mainpageDiv}`}>
        <Header />
        <CtaElement setModal={setModal} />
        <Footer />
      </main>
    </>
  );
}
