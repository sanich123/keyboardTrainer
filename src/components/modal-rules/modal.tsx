import { LANG_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { langsData } from '../Settings';
import { FocusOn } from 'react-focus-on';
import './modal.scss';

type Modal = {
  setModal: (arg: boolean) => void
};

export default function ModalRules({ setModal }: Modal) {
  const { isRu, isLight } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;

  return (
    <div className="modal-all" onClick={() => setModal(false)}>
      <FocusOn
        onEscapeKey={() => setModal(false)}
        onClickOutside={() => setModal(false)}
      >
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
      </FocusOn>
    </div>
  );
}
