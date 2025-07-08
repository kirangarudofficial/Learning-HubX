import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import SearchCourse from './components/SearchCourse';
import CourseFeatures from './components/CourseFeatures';
import PopularCourses from './components/PopularCourses';
import BecomeTeacher from './components/BecomeTeacher';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <SearchCourse />
      <CourseFeatures />
      <PopularCourses />
      <BecomeTeacher />
      <Testimonials />
    </div>
  );
}

export default App;