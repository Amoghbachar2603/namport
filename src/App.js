import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Helmet>
        <title>Namratha N B | AI & ML Engineer</title>
        <meta name="description" content="Namratha N B is an AI and Machine Learning Engineer specializing in deep learning, large language models (LLMs), and intelligent systems development." />
        <meta name="keywords" content="Namratha N B, AI Engineer, Machine Learning Engineer, Deep Learning, LLMs, Python Developer" />
        <meta property="og:title" content="Namratha N B | AI & ML Engineer" />
        <meta property="og:description" content="Namratha N B is an AI and Machine Learning Engineer specializing in deep learning, large language models (LLMs), and intelligent systems development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://namrathanb.dev" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Layout>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Leadership />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
