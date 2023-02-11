import './award.scss';
import Sp100On from '../../assets/img/awards/sp100-on.webp';
import Sp100Off from '../../assets/img/awards/sp100-off.webp';
import Sp200On from '../../assets/img/awards/sp200-on.webp';
import Sp200Off from '../../assets/img/awards/sp200-off.webp';
import Sp300On from '../../assets/img/awards/sp300-on.webp';
import Sp300Off from '../../assets/img/awards/sp300-off.webp';
import AccOn from '../../assets/img/awards/acc-on.webp';
import AccOff from '../../assets/img/awards/acc-off.webp';

interface PropsAward {
  nameAward: string
  text: string
}

export default function Award({ nameAward, text }: PropsAward) {

  let name: string;
  switch (nameAward) {
  case 'acc-on':
    name = AccOn;
    break;
  case 'acc-off':
    name = AccOff;
    break;
  case 'sp100-on':
    name = Sp100On;
    break;
  case 'sp100-off':
    name = Sp100Off;
    break;
  case 'sp200-on':
    name = Sp200On;
    break;
  case 'sp200-off':
    name = Sp200Off;
    break;
  case 'sp300-on':
    name = Sp300On;
    break;
  case 'sp300-off':
    name = Sp300Off;
    break;
  default:
    name = 'undefined';
  }

  return (
    <div className="all-award">
      <div className="circle-award">
        <img src={name} width={137} alt="award" />
      </div>
      <p>{text}</p>
    </div>
  );
}

