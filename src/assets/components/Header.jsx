// Import komponen FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import ikon yang ingin digunakan
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      <header className="bg-background dark:bg-hitam py-20 md:py-44">
        <div className="md:flex items-start"> {/* Aligns items to the start */}
          <div className="mx-10 md:mx-10 lg:mx-28 mt-10 md:mr-auto">
            <p className="text-xl text-hitam sm:text-4xl md:text-2xl lg:text-4xl dark:text-background font-space">
              Hi, I`m <span className="text-xl font-semibold md:text-2xl sm:text-4xl lg:text-4xl dark:text-background">Khitan Hesthi Kuncoro</span> 
            </p>
            <p className="text-xl mt-3 sm:text-4xl text-kuning font-semibold md:text-2xl lg:text-4xl">
             Website Developer
            </p>
            <p className="text-xl sm:text-4xl text-hitam mt-3 font-semibold md:text-2xl dark:text-background">
              Let`s Connect!
            </p>
            
            {/* Icons positioned directly below the text */}
            <div className="mt-5 sm:mt-16 md:mt-20 space-x-3 md:space-x-5">
              <a href="https://www.linkedin.com/in/khitan-hesthi-kuncoro">
              <FontAwesomeIcon icon={faLinkedin} className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning" />
              </a>
              <a href='https://github.com/kuncoro-0927'>
              <FontAwesomeIcon icon={faSquareGithub} href='https://github.com/kuncoro-0927' className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning" /></a>
              <a href="https://www.instagram.com/khitannn?igsh=ZnNzZTg3cm44Mmcy&utm_source=qrs">
              <FontAwesomeIcon icon={faInstagramSquare} className="text-hitam text-2xl hover:text-kuning transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-background dark:hover:text-kuning" />
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="mx-10 md:mr-10 lg:mr-36 sm:mx-auto md:w-96 lg:w-96 mt-10 md:mt-0">
  <img 
    src="/portofolio-react-tailwindcss/images/profile2.png" 
    alt="Profile" 
    className="" 
  />
</div>
        </div>
      </header>
    </>
  );
}

export default Header;
