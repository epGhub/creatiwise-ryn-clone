import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorksSection from './components/WorksSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <ClientsSection /> */}
      <ExpertiseSection />
      <WorksSection />
      <ExperienceSection />
      <BlogSection />
      <Testimonials />
       <FAQSection />
      <Footer />
    </>
  );
}

export default App;



// // src/App.js
// import React from 'react';
// import HeroSection from './components/HeroSection';
// import WorksSection from './components/WorksSection';

// function App() {
//   return (
//     <div>
//       <HeroSection />
//       <WorksSection />
//     </div>
//   );
// }

// export default App;
