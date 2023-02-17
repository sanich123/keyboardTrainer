import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './modal.scss';


export default function ModalRules() {

  const { isLight } = useThemeLang();

  return (
    <div className="modal">
      <div className={`modal-container ${isLight ? 'light-modal' : 'darck-modal'}` }>
        fdsf
      </div>
    </div>
  );
}
