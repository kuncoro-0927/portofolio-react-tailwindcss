import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="about" className="dark:bg-hitam">
      <div className="mx-10 md:mx-20 py-10">
        <p
          className="text-hitam text-xl sm:text-2xl md:text-4xl font-bold dark:text-background"
          data-aos="fade-up"
        >
          About Me
        </p>
        <p
          className="text-sm sm:text-xl md:text-xl lg:text-2xl text-justify mt-4 dark:text-background"
          data-aos="fade-up"
        >
          Hello, I am Khitan Hesthi Kuncoro, an Information Technology student
          at Brawijaya University. I am actively developing my skills in web
          development and UI/UX design. With creativity and innovation as my
          strengths, I am responsible for programming and design aspects. In
          addition, I have good communication skills, am always open to new
          insights and experiences, and am ready to face challenges and work
          under pressure. I also adapt quickly to a dynamic work environment.
        </p>
      </div>
    </section>
  );
}

export default About;
