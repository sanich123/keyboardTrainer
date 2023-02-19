import Sp100On from '../../assets/img/awards/sp100-on.webp';
import Sp100Off from '../../assets/img/awards/sp100-off.webp';
import Sp200On from '../../assets/img/awards/sp200-on.webp';
import Sp200Off from '../../assets/img/awards/sp200-off.webp';
import Sp300On from '../../assets/img/awards/sp300-on.webp';
import Sp300Off from '../../assets/img/awards/sp300-off.webp';
import AccOn from '../../assets/img/awards/acc-on.webp';
import AccOff from '../../assets/img/awards/acc-off.webp';


export default function ChoicePicture(name: string) {

  let res = '';

  switch (name) {
  case 'acc-on':
    res = AccOn;
    break;
  case 'acc-off':
    res = AccOff;
    break;
  case 'sp100-on':
    res = Sp100On;
    break;
  case 'sp100-off':
    res = Sp100Off;
    break;
  case 'sp200-on':
    res = Sp200On;
    break;
  case 'sp200-off':
    res = Sp200Off;
    break;
  case 'sp300-on':
    res = Sp300On;
    break;
  case 'sp300-off':
    res = Sp300Off;
    break;
  default:
    res = 'undefined';
  }

  return res;
}
