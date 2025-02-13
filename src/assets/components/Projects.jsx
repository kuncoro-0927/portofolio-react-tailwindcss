import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="dark:bg-hitam">
      <div className="mx-10 md:mx-20 py-10">
        <p
          className="text-hitam text-xl sm:text-2xl md:text-4xl font-bold dark:text-background"
          data-aos="fade-up"
        >
          Projects
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4">
          {/* Project 3 */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="/portofolio-react-tailwindcss/images/mockup-cultivo-home.png"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-start md:justify-end gap-2 flex-wrap">
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300">
                    React Js
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Express Js
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Mysql
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Tailwind
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Material UI
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Midtrans
                  </div>
                </div>

                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  Cultivo
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  I am happy to be able to complete a massive project from my
                  internship place, infinite learning. Almost 4 months have
                  passed but it feels like I just joined yesterday. During these
                  4 months I have created a website called cultivo using
                  express, react js and mysql as a database. So, what is
                  cultivo? Cultivo is an adventure ticket booking platform that
                  offers consumers the convenience of exploring, booking, and
                  enjoying various tourism products.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://cultivo.infinitelearningproject.com"
                    className="group flex items-center w-24 py-2 justify-center bg-hitam hover:bg-slate-950 rounded-md text-xs font-medium text-background"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-background text-xs"
                    />
                    <span className="ml-2">Live Site</span>
                  </a>

                  <a
                    href="https://github.com/kuncoro-0927/frontend-cultivo-project"
                    className="group flex items-center w-24  py-2 justify-center bg-gray-200 rounded-md text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-hitam text-sm group-hover:text-background duration-300"
                    />
                    <span className="ml-2 text-sm">Github</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1vHS4Vojtb6otbtJFhIod-HZgB6_8Nvsq/view?usp=sharing"
                    className="group flex items-center w-24  py-2 justify-center bg-gray-200 rounded-md text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="text-hitam text-sm group-hover:text-background duration-300"
                    />
                    <span className="ml-2 text-sm">More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PROJECT 1 */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="/portofolio-react-tailwindcss/images/Free_MacBook_Pro_1.png"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-start md:justify-end gap-2 flex-wrap">
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300">
                    Tailwind
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Laravel
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    AlpineJs
                  </div>
                </div>

                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  iTern Website - Company Profile
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  During the Project Based Learning program at Universitas
                  Brawijaya, I played the role of a Full Stack Web Developer in
                  working on a project called Itern, which focuses on developing
                  a company profile website. In this project, I was involved in
                  all aspects of web development, from the frontend to the
                  backend, ensuring that every part of the website was
                  functioning properly and meeting the company`s needs. This
                  experience strengthened my technical skills and provided
                  valuable insights into web development as a whole.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="group flex items-center w-24 py-2 justify-center bg-hitam hover:bg-slate-950 rounded-md text-xs font-medium text-background"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-background text-xs"
                    />
                    <span className="ml-2">Live Site</span>
                  </a>

                  <a
                    href="https://github.com/kuncoro-0927/iTern-Company-Profile"
                    className="group flex items-center w-24  py-2 justify-center bg-gray-200 rounded-md text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-hitam text-sm group-hover:text-background duration-300"
                    />
                    <span className="ml-2 text-sm">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="/portofolio-react-tailwindcss/images/project.JPG"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-start md:justify-end gap-2 flex-wrap">
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300">
                    Bootstrap
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Laravel
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    MySql
                  </div>
                </div>

                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  E-Notulensi
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  Project Based Learning Group creates a Minutes Archiving
                  website for the faculty, here I play the role of a backend
                  developer. It feels good to be able to work with the team and
                  also improve skills such as communication, cooperation,
                  problem-solving and others.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="group flex items-center w-24 py-2 justify-center bg-hitam hover:bg-slate-950 rounded-md text-xs font-medium text-background"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-background text-xs"
                    />
                    <span className="ml-2">Live Site</span>
                  </a>

                  <a
                    href="https://github.com/kuncoro-0927/e-notulensi"
                    className="group flex items-center w-24  py-2 justify-center bg-gray-200 rounded-md text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-hitam text-sm group-hover:text-background duration-300"
                    />
                    <span className="ml-2 text-sm">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="/portofolio-react-tailwindcss/images/porto.svg"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-start md:justify-end gap-2 flex-wrap">
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300">
                    React Js
                  </div>
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800  hover:bg-hitam hover:text-background duration-300">
                    Tailwind
                  </div>
                </div>

                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  My Portofolio
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  My first portfolio project and also my first project using
                  React JS. I am very happy to be able to create this simple
                  project in a short time.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="group flex items-center w-24 py-2 justify-center bg-hitam hover:bg-slate-950 rounded-md text-xs font-medium text-background"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-background text-xs"
                    />
                    <span className="ml-2">Live Site</span>
                  </a>

                  <a
                    href="https://github.com/kuncoro-0927/portofolio-react-tailwindcss"
                    className="group flex items-center w-24  py-2 justify-center bg-gray-200 rounded-md text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-hitam text-sm group-hover:text-background duration-300"
                    />
                    <span className="ml-2 text-sm">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl lg:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="/portofolio-react-tailwindcss/images/uiux.png"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-start md:justify-end gap-2 flex-wrap">
                  <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-hitam hover:text-background duration-300">
                    Figma
                  </div>
                </div>

                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  UI/UX Design - iTern
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  As a Full Stack Web Developer in the previous iTern project, I
                  have created a UI/UX design for iTern. I use Figma as a tool
                  to create designs.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.figma.com/proto/aGhSYUx4fXqGVhF69iPlGY/PBL-iTern?page-id=988%3A873&node-id=988-1711&viewport=1284%2C841%2C0.25&t=6oqCWyRvbDxtdeSQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=988%3A1711"
                    className="group flex items-center w-24 py-2 justify-center bg-hitam hover:bg-slate-950 rounded-md text-xs font-medium text-background"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-background text-xs"
                    />
                    <span className="ml-2">Prototype</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
