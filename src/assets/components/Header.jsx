// Import komponen FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import ikon yang ingin digunakan
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <header className="bg-background dark:bg-hitam py-20 md:py-44">
        <div className="md:flex items-start">
          {" "}
          {/* Aligns items to the start */}
          <div className="mx-10 md:mx-10 lg:mx-28 mt-10 md:mr-auto">
            <p
              className="text-xl text-hitam sm:text-4xl md:text-2xl lg:text-4xl dark:text-background font-space"
              data-aos="fade-right"
            >
              Hi, I`m{" "}
              <span
                className="text-xl font-semibold md:text-2xl sm:text-4xl lg:text-4xl dark:text-background"
                data-aos="fade-right"
              >
                Khitan Hesthi Kuncoro
              </span>
            </p>
            <p
              className="text-xl mt-3 sm:text-4xl text-kuning font-semibold md:text-2xl lg:text-4xl"
              data-aos="fade-right"
            >
              Fullstack Developer
            </p>
            <p
              className="text-xl sm:text-4xl text-hitam mt-3 font-semibold md:text-2xl dark:text-background"
              data-aos="fade-right"
            >
              Let`s Connect!
            </p>

            {/* Icons positioned directly below the text */}
            <div
              className="mt-5 sm:mt-16 md:mt-20 space-x-3 md:space-x-5"
              data-aos="fade-up"
            >
              <a href="https://www.linkedin.com/in/khitan-hesthi-kuncoro">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning"
                />
              </a>
              <a href="https://github.com/kuncoro-0927">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  href="https://github.com/kuncoro-0927"
                  className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning"
                />
              </a>
              <a href="https://www.instagram.com/itandevv?igsh=MWM0ZHdheWV0Nmc0bw%3D%3D&utm_source=qr">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning"
                />
              </a>
            </div>
          </div>
          {/* Image section */}
          <div
            className="mx-10 md:mr-10 lg:mr-36 sm:mx-auto md:w-96 lg:w-96 mt-10 md:mt-0"
            data-aos="fade-left"
          >
            <img
              src="/portofolio-react-tailwindcss/images/kuncoro2.jpg"
              alt="Profile"
              className="rounded-full h-96 w-96 object-cover bg-center"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
