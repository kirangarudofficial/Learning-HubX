import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import SearchCourse from './components/SearchCourse';
import CourseFeatures from './components/CourseFeatures';
import PopularCourses from './components/PopularCourses';
import BecomeTeacher from './components/BecomeTeacher';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import SearchAndDiscovery from './components/SearchAndDiscovery';
import BlogPage from './components/BlogPage';
import PaymentCheckout from './components/PaymentCheckout';
import ProgressTracker from './components/ProgressTracker';
import DiscussionForum from './components/DiscussionForum';
import AdminDashboard from './components/AdminDashboard';
import QuizInterface from './components/QuizInterface';
import LiveClassInterface from './components/LiveClassInterface';
import AssignmentSubmission from './components/AssignmentSubmission';
import CertificateDownload from './components/CertificateDownload';
import AITutorChat from './components/AITutorChat';
import GamificationUI from './components/GamificationUI';
import SkillGapAnalyzer from './components/SkillGapAnalyzer';
import CareerPathRecommendation from './components/CareerPathRecommendation';
import ResumeFeedback from './components/ResumeFeedback';
import NotificationsPage from './components/NotificationsPage';
import GDPRSettings from './components/GDPRSettings';
import AdminAuditLog from './components/AdminAuditLog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('student'); // student, instructor, admin

  const handleLogin = (email, password) => {
    // Mock login logic
    setIsLoggedIn(true);
    if (email.includes('admin')) {
      setUserRole('admin');
    } else if (email.includes('instructor')) {
      setUserRole('instructor');
    } else {
      setUserRole('student');
    }
    setShowLoginModal(false);
  };

  const handleRegister = (userData) => {
    // Mock registration logic
    setIsLoggedIn(true);
    setUserRole('student');
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('student');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <TrustedPartners />
            <SearchCourse />
            <CourseFeatures />
            <PopularCourses />
            <BecomeTeacher />
            <Testimonials />
          </>
        );
      case 'courses':
        return <SearchAndDiscovery />;
      case 'blog':
        return <BlogPage />;
      case 'checkout':
        return <PaymentCheckout />;
      case 'progress':
        return isLoggedIn ? <ProgressTracker /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to view progress</p></div>;
      case 'forum':
        return <DiscussionForum />;
      case 'admin':
        return userRole === 'admin' ? <AdminDashboard /> : <div className="min-h-screen flex items-center justify-center"><p>Admin access required</p></div>;
      case 'quiz':
        return isLoggedIn ? <QuizInterface /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to take quiz</p></div>;
      case 'live-class':
        return isLoggedIn ? <LiveClassInterface /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to join live class</p></div>;
      case 'assignment':
        return isLoggedIn ? <AssignmentSubmission /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to submit assignment</p></div>;
      case 'certificate':
        return isLoggedIn ? <CertificateDownload /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to view certificate</p></div>;
      case 'gamification':
        return isLoggedIn ? <GamificationUI /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to view achievements</p></div>;
      case 'skill-gap':
        return <SkillGapAnalyzer />;
      case 'career-path':
        return <CareerPathRecommendation />;
      case 'resume-feedback':
        return <ResumeFeedback />;
      case 'notifications':
        return isLoggedIn ? <NotificationsPage /> : <div className="min-h-screen flex items-center justify-center"><p>Please login to view notifications</p></div>;
      case 'privacy':
        return <GDPRSettings />;
      case 'audit-log':
        return userRole === 'admin' ? <AdminAuditLog /> : <div className="min-h-screen flex items-center justify-center"><p>Admin access required</p></div>;
      default:
        return (
          <>
            <Hero />
            <TrustedPartners />
            <SearchCourse />
            <CourseFeatures />
            <PopularCourses />
            <BecomeTeacher />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogin={() => setShowLoginModal(true)}
        onRegister={() => setShowRegisterModal(true)}
        onLogout={handleLogout}
      />
      
      {renderPage()}
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* AI Tutor Chat - Always available */}
      <AITutorChat />
      
      {/* Modals */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}
      
      {showRegisterModal && (
        <RegisterModal
          onClose={() => setShowRegisterModal(false)}
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </div>
  );
}

export default App;