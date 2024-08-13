/* eslint-disable no-unused-vars */
import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import About from './assets/components/About'
import CustomCursor from "./assets/components/CustomCursor";
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Footer from './assets/components/Footer';

import { skillsSection, marqueeList, imgList } from './assets/data/SkillsSection';

import Marqueecontoh from './assets/components/Marqueecontoh';
import parse from 'html-react-parser';
const App = () => {
  return (
    <div className='cursor-none'>
    <CustomCursor />
    <Navbar />
    <Header />
    <About />
    <section id='skill' className="dark:bg-hitam md:py-10">
    <div className="mx-10 md:mx-20 md:py-10">
    {parse(skillsSection.content)}
      </div>
      <Marqueecontoh imgList={imgList}/>
    </section>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  
  )
  
}

export default App
