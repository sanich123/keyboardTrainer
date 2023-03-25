import './award.scss';
import ChoicePicture from './choice-picture-award';

interface PropsAward {
  nameAward: string
  text: string
  width: number
}

export default function Award({ nameAward, text, width }: PropsAward) {

  return (
    <div className="all-award">
      <div className="circle-award">
        <img src={ChoicePicture(nameAward)} width={width} alt="award" />
      </div>
      <p>{text}</p>
    </div>
  );
}
