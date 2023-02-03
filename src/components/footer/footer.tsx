import './footer.scss';
import LogoRace from '../../assets/img/logo-race.webp';

export default function Footer() {
  return (
    <div className="footer w-full px-[80px] bg-footer h-[120px] absolute bottom-0">
      <div>
        <img src={LogoRace} alt="logo-race"/>
        <div className="">
          <a href="https://github.com/IrinaIID" className="link-github mr-[30px]">irinaiid</a>
          <a href="https://github.com/sanich123" className="link-github mr-[30px]">sanich123</a>
          <a href="https://github.com/predmaxim" className="link-github">predmaxim</a>
        </div>
      </div>
    </div>
  );
}
