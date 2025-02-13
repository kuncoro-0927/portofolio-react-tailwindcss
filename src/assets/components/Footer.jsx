// Import komponen FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import ikon yang ingin digunakan
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./Contact";

function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <section id="contact" className="dark:bg-hitam py-10">
        <div className="mx-10 md:mx-20" data-aos="fade-up">
          <p className="text-hitam text-xl sm:text-2xl md:text-4xl font-bold dark:text-background">
            Contact Me
          </p>
        </div>

        <div className="mx-10 md:mx-20">
          <Contact />
        </div>

        <div className="mx-10 md:mx-20 mt-16 md:mt-20" data-aos="fade-up">
          <p className="text-sm sm:text-xl md:text-xl lg:text-2xl mt-4 dark:text-background">
            Thank you for visiting my portfolio, wait for the next update!
          </p>
          <p className="text-sm sm:text-xl md:text-xl lg:text-2xl mt-4 dark:text-background">
            kuncorokhitan271@gmail.com
          </p>
          <p className="text-sm sm:text-xl md:text-xl lg:text-2xl dark:text-background">
            Malang
          </p>

          <div className="mt-5 sm:mt-16 md:mt-16 space-x-3 md:space-x-5">
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
          <div className="">
            <p className="text-sm sm:text-xl md:text-md lg:text-md mt-4 text-kuning">
              © 2024 - Designed & Developed by Khitan
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
