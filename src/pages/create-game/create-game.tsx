import Settings from '../../components';
import { THEME_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';

export default function CreateGamePage() {
  const { isLight } = useThemeLang();
  const { light, dark } = THEME_VALUES;
  const theme = isLight ? light : dark;
  return (
    <div className={theme}>
      <Settings />
    </div>
  );
}
