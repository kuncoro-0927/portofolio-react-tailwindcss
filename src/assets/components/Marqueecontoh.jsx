/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";


function Marqueecontoh(props) {
  return (
    <Marquee className="mt-5">
      {props.imgList.map((item, index) => (
        <div key={index} className="ml-7 md:ml-20">
          {item.img} {/* Pastikan bahwa item.svg adalah valid */}
        </div>
      ))}
    </Marquee>
  );
}

export default Marqueecontoh;
