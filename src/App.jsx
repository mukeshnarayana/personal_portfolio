import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import useScrollToTop from './hooks/useScrollToTop';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Education = lazy(() => import('./pages/Education'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  useScrollToTop();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <div className="flex flex-col min-h-screen relative z-10 w-full pt-20">
        <Navbar />
        <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
              <Route path="/education" element={<Suspense fallback={<div>Loading...</div>}><Education /></Suspense>} />
              <Route path="/experience" element={<Suspense fallback={<div>Loading...</div>}><Experience /></Suspense>} />
              <Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}><Projects /></Suspense>} />
              <Route path="/achievements" element={<Suspense fallback={<div>Loading...</div>}><Achievements /></Suspense>} />
              <Route path="/skills" element={<Suspense fallback={<div>Loading...</div>}><Skills /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
