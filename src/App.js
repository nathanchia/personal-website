import React from 'react';

import Cover from './sections/Cover';
import About from './sections/About';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Skills from './sections/Skills';

import ToUp from './components/toUp/ToUp';

function App() {
  return (
    <div >
      <Cover />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ToUp />
    </div>
  );
}

export default App;
