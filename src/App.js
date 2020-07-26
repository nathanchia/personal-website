import React, {useState} from 'react';

import Cover from './sections/Cover';
import About from './sections/About/About';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import Footer from './sections/Footer';
import NavModal from './components/NavModal';
import ToUp from './components/toUp/ToUp';
import ToModal from './components/toModal/ToModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // isModalVisible passed to Experience and Projects to hide arrows of carousels
  return (
    <div id='root'>
      <Cover />
      <About />
      <Experience isModalVisible={isModalVisible}/>
      <Projects isModalVisible={isModalVisible}/>
      <Skills />
      <Footer />
      <ToUp />
      <ToModal setIsModalVisible={setIsModalVisible}/>
      <NavModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
}

export default App;
