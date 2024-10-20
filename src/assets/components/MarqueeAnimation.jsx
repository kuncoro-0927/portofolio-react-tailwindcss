/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Marqueecontoh(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Marquee className="mt-5" data-aos="fade-up">
      {props.imgList.map((item, index) => (
        <div key={index} className="ml-7 md:ml-20">
          {item.img} {/* Pastikan bahwa item.svg adalah valid */}
        </div>
      ))}
    </Marquee>
  );
}

export default Marqueecontoh;
