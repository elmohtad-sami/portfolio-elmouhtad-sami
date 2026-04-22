import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

export default function App() {
  return (
    <Layout>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </Layout>
  );
}
