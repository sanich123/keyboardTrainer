import { LANG_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { langsData } from '../Settings';
import './modal.scss';
import { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { addEscListener } from '../../utils/event-listeners';

type Modal = {
  setModal: (arg: boolean) => void
};

export default function ModalRules({ setModal }: Modal) {
  const { isRu, isLight } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  useEffect(() => {
    addEscListener(setModal);
  });

  return (
    <RemoveScroll removeScrollBar={false}>
      <FocusLock>
        <div className="modal-all" onClick={() => setModal(false)}>
          <div
            className={`modal-container ${isLight ? '' : 'darck-modal'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h1 className="h1-modal">{`${langsData[lang].modal.modalName}`}</h1>
              <button className="span-close" onClick={() => setModal(false)}>
                &#x2718;
              </button>
            </div>
            <p className="p-modal-text">{`${langsData[lang].modal.modalText}`}</p>
          </div>
        </div>
      </FocusLock>
    </RemoveScroll>
  );
}
