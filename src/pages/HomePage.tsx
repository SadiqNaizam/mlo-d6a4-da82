import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BestsellersShowcase from '@/components/BestsellersShowcase';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-white"
    >
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white px-4"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534269222403-9a3b2f6844d7?q=80&w=2070&auto=format&fit=crop')`, // A whimsical blue sky background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.h1 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
              style={{ fontFamily: 'sans-serif' }}
            >
              Welcome to Doraemon Delights!
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md"
            >
              Taste the magic from the 22nd century. Every dish is an adventure waiting to be discovered!
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="mt-8 bg-blue-500 hover:bg-blue-600 transition-transform duration-200 hover:scale-105">
                <Link to="/menu"> {/* Path from App.tsx */}
                  Explore Our Magical Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <BestsellersShowcase />
      </main>
      <Footer />
    </motion.div>
  );
};

export default HomePage;