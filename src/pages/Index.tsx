import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jane Doe',
    jobTitle: 'Quality Assurance Engineer',
    description: 'QA Engineer specializing in manual & automated testing for web and API.',
    url: '/',
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

export default Index;
