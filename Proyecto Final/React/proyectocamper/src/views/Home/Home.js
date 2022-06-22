import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Foto1 from "../../Images/Foto1.jpg";
import Foto2 from "../../Images/Foto2.jpg";
import Foto3 from "../../Images/Foto3.jpg";

export default function Home() {
  return (
    <Carousel>
      <div>
        <img alt="foto1" src={Foto1} />
      </div>
      <div>
        <img alt="foto2" src={Foto2} />
      </div>
      <div>
        <img alt="foto3" src={Foto3} />
      </div>
    </Carousel>
  );
}
