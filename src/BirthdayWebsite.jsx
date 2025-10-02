import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeartsBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-300 text-2xl"
        style={{
          left: `${Math.random() * 100}vw`,
          top: '100vh',
        }}
        initial={{ y: '100vh', opacity: 0, scale: 0.5 }}
        animate={{
          y: '-120vh',
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
          rotate: Math.random() * 360,
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: Math.random() * 2,
          ease: 'easeOut',
        }}
      >
        💖
      </motion.div>
    ))}
  </div>
);

const Countdown = ({ onUnlock }) => {
  const targetDate = new Date(2025, 9, 6, 0, 0, 0); // October 6, 2025, 00:00:00
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onUnlock();
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [onUnlock]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold mb-8 text-pink-300"
      >
        Almost Time!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-12 text-gray-300"
      >
        Your special day is coming soon...
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + Object.keys(timeLeft).indexOf(unit) * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-500/30"
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-pink-300"
              key={`${unit}-${value}`} // Key to re-animate on change
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              {value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm md:text-base text-gray-300 mt-2 capitalize">
              {unit}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-lg mt-8 text-pink-200"
      >
        Until October 6, 2025
      </motion.p>
    </motion.div>
  );
};

const BirthdayWebsite = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const targetDate = new Date(2025, 9, 6, 0, 0, 0);

  useEffect(() => {
    const now = new Date();
    const isUnlocked = now >= targetDate || localStorage.getItem('birthdayUnlocked') === 'true';
    if (isUnlocked) {
      setShowContent(true);
      localStorage.setItem('birthdayUnlocked', 'true');
    }
  }, []);

  const handleUnlock = () => {
    setShowContent(true);
    localStorage.setItem('birthdayUnlocked', 'true');
  };

  const sections = [
    // Personal Note Section (Now starts at index 0)
    {
      type: 'note',
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-pink-300"
          >
            My Dearest Love
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-500/30"
          >
            <p className="text-xl leading-relaxed text-white">
              Happy Birthday to the most amazing person in my life! Every moment with you feels like a beautiful dream. 
              Your smile lights up my world, your laughter is my favorite melody, and your love is the greatest gift I've ever received.
            </p>
            <p className="text-xl leading-relaxed text-white mt-4">
              Today, I want you to know how incredibly special you are to me. You make every day brighter just by being you.
            </p>
            <p className="text-xl leading-relaxed text-white mt-4 font-semibold">
              To My Khadoos....With all my love, always.
            </p>
          </motion.div>
        </motion.div>
      )
    },
    
    // Photo Gallery Section (Now index 1)
    {
      type: 'gallery',
      content: (
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-8 text-pink-300"
          >
            Our Beautiful Memories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo1.jpg" // e.g., "/images/photo-1.jpg" or "https://i.imgur.com/your-photo-1.jpg"
                alt="Description of your first memory photo (e.g., Our first hike together)"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }} // Fallback if image fails
              />
            </motion.div>
            
            {/* Photo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo2.jpg" // e.g., "/images/photo-2.jpg"
                alt="Description of your second memory photo"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
              />
            </motion.div>
            
            {/* Photo 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo3.png" // e.g., "/images/photo-3.jpg"
                alt="Description of your third memory photo"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
              />
            </motion.div>
            
            {/* Photo 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo4.jpg" // e.g., "/images/photo-4.jpg"
                alt="Description of your fourth memory photo"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
              />
            </motion.div>
            
            {/* Photo 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo5.png" // e.g., "/images/photo-5.jpg"
                alt="Description of your fifth memory photo"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
              />
            </motion.div>
            
            {/* Photo 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-pink-500/20"
            >
              <img 
                src="/images/photo6.jpg" // e.g., "/images/photo-6.jpg"
                alt="Description of your sixth memory photo"
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
              />
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Final Personalized Note (Now index 2)
    {
      type: 'final-note',
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-pink-300"
          >
            My Promise to You
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-500/30"
          >
            <p className="text-2xl leading-relaxed text-white font-medium">
              I promise to always be by your side, to support your dreams, to laugh with you, 
              and to love you more with each passing day. You are my everything.
              Beside these forever promises, I also promise to irritate you as much as possible and ofc endless fights. 
            </p>
            <motion.p
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
              className="text-3xl font-bold text-pink-300 mt-6"
            >
              Happy Birthday, My Love(Khadoos)!
              I LOVE YOU SO MUCH......!!!
            </motion.p>
          </motion.div>
        </motion.div>
      )
    },
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative">
        <HeartsBackground />
        <Countdown onUnlock={handleUnlock} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center p-4 relative">
      <HeartsBackground />
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl"
        >
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSection}
              disabled={currentSection === 0}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                currentSection === 0 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              Previous
            </motion.button>
            
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSection ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSection}
              disabled={currentSection === sections.length - 1}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                currentSection === sections.length - 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              Next
            </motion.button>
          </div>

          {/* Current Section Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="min-h-[60vh] flex items-center justify-center"
            >
              {sections[currentSection].content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BirthdayWebsite;
