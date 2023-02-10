import Settings, { TextWindow, TrafficLight } from '../../components';
import { langsData } from '../../components/Settings';
import { TextWindowProps } from '../../components/TextWindow';
import { TrafficLightProps } from '../../components/TrafficLight';
import { LANG_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import styles from './create-game.module.scss';

export default function CreateGamePage() {
  // document.body.;

  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;

  const elapsedTime: TrafficLightProps = {
    id: 1,
    color: 'red',
    textInfo: '01:22',
    textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTime}`,
    unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).elapsedTimeUnit}`,
  };

  const speed: TrafficLightProps = {
    id: 2,
    color: 'yellow',
    textInfo: '100',
    textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speed}`,
    unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).speedUnit}`,
  };

  const accuracy: TrafficLightProps = {
    id: 3,
    color: 'green',
    textInfo: '120',
    textDesc: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracy}`,
    unit: `${(langsData[lang].pageGame.trafficLight as { [key: string]: string }).accuracyUnit}`,
  };

  const trafficLightProps: TrafficLightProps[] = [elapsedTime, speed, accuracy];
  const textWindowProps: TextWindowProps = {
    lessonText: 'Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor! Lorem ipsum dolor!\n',
  };

  return (
    <div id="CreateGamePage" className={`${styles.CreateGamePage}`}>

      <Settings />

      <div className={`trafficLight ${styles.trafficLight}`}>
        {trafficLightProps.map((prop: TrafficLightProps) => <TrafficLight key={`${prop.id}`} {...prop} />)}
      </div>

      <TextWindow {...textWindowProps} />
    </div>
  );
}
