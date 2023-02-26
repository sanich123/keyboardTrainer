import { useEffect } from 'react';
import { LANG_VALUES } from '../../utils/const';
import { addEscListener } from '../../utils/event-listeners';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { langsData } from '../Settings';
import './modal.scss';

type Modal = {
  setModal: (arg: boolean) => void
};

export default function ModalRules({ setModal }: Modal) {
  const { isRu, isLight } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  useEffect(() => {
    addEscListener(setModal);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
      body.inert = true;
    }
    const modal = document.querySelector('.modal-all') as HTMLDivElement;
    if (modal) {
      modal.setAttribute('tabindex', '0');
      modal.focus();
    }
  });

  return (
    <div className="modal-all" onClick={() => setModal(false)}>
      <div
        className={`modal-container ${isLight ? '' : 'darck-modal'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h1 className="h1-modal">{`${langsData[lang].modal.modalName}`}</h1>
          <button className="span-close" onClick={() => setModal(false)} onFocus={() => console.log('Я в фокусе')}>
              &#x2718;
          </button>
        </div>
        <p className="p-modal-text">{`${langsData[lang].modal.modalText}`}</p>
      </div>
    </div>
  );
}
