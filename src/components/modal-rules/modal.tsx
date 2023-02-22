import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './modal.scss';


type Modal = {
  setModal: (arg: boolean) => void
};


export default function ModalRules({ setModal }: Modal) {
  const { isLight } = useThemeLang();
  return (
    <div className="modal-all" onClick={() => setModal(false)}>
      <div
        className={`modal-container ${isLight ? 'light-modal' : 'darck-modal'}`}
        onClick={(e) => e.stopPropagation()}
      >
        fdsfb
      </div>
    </div>
  );
}
