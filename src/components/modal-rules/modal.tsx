import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';

export default function ModalRules() {

  const { isLight } = useThemeLang();
  // const lang = isRu ? 'ru' : 'en';

  return (
    <div className="modal">
      <div className={`modal-container ${isLight ? 'light-modal' : 'darck-modal'}` }>
        fdsf
      </div>
    </div>
  );
}
