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

const BirthdayWebsite = () => {
  const [showContent, setShowContent] = useState(true); // Set to true to bypass countdown/timer
  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    if (isVideoEnded) {
      // Auto-advance to next section after video ends
      const timer = setTimeout(() => {
        setCurrentSection(1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVideoEnded]);

  const sections = [
    // Video Section
    {
      type: 'video',
      content: (
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-8 text-pink-300"
          >
            A Special Message for You
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <video
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
              onPlay={() => setIsVideoPlaying(true)}
              onEnded={() => setIsVideoEnded(true)}
              src="https://placeholder-image-service.onrender.com/video/640x360?prompt=Birthday%20celebration%20video%20with%20hearts%20and%20confetti&id=video-001"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      )
    },
    
    // Personal Note Section
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
              With all my love, always.
            </p>
          </motion.div>
        </motion.div>
      )
    },
    
    // Photo Gallery Section
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20hiking%20together%20on%20a%20sunny%20mountain%20trail%20with%20beautiful%20landscape&id=photo-001" 
                alt="Couple hiking together on a sunny mountain trail with beautiful landscape"
                className="w-full h-64 object-cover"
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20laughing%20together%20at%20a%20cozy%20cafe%20with%20warm%20lighting&id=photo-002" 
                alt="Couple laughing together at a cozy cafe with warm lighting"
                className="w-full h-64 object-cover"
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20watching%20sunset%20at%20the%20beach%20with%20silhouette%20against%20orange%20sky&id=photo-003" 
                alt="Couple watching sunset at the beach with silhouette against orange sky"
                className="w-full h-64 object-cover"
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20celebrating%20birthday%20with%20cake%20and%20balloons%20in%20a%20decorated%20room&id=photo-004" 
                alt="Couple celebrating birthday with cake and balloons in a decorated room"
                className="w-full h-64 object-cover"
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20dancing%20under%20fairy%20lights%20in%20a%20romantic%20garden%20setting&id=photo-005" 
                alt="Couple dancing under fairy lights in a romantic garden setting"
                className="w-full h-64 object-cover"
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
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Couple%20smiling%20happily%20with%20arms%20around%20each%20other%20in%20a%20park&id=photo-006" 
                alt="Couple smiling happily with arms around each other in a park"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Final Personalized Note
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
            </p>
            <motion.p
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
              className="text-3xl font-bold text-pink-300 mt-6"
            >
              Happy Birthday, My Love!
            </motion.p>
          </motion.div>
        </motion.div>
      )
    },
    
    // Animated Couples Section (replacing teddy bears)
    {
      type: 'animated-couples',
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-pink-300"
          >
            Our Eternal Love
          </motion.h2>
          <div className="relative flex justify-center items-center h-96 bg-gray-800/30 rounded-2xl p-8 border border-pink-500/20">
            {/* First Couple (Left side - approaching and dancing) */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: -50, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative"
              >
                {/* Male Figure */}
                <div className="w-20 h-48 bg-blue-600 rounded-t-lg relative mx-auto">
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                  {/* Arms */}
                  <motion.div
                    animate={{ rotate: [-20, 20, -20] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-blue-500 rounded-full"
                  ></motion.div>
                </div>
                {/* Female Figure (paired) */}
                <div className="w-20 h-52 bg-pink-500 rounded-t-lg relative mx-auto mt-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                  <motion.div
                    animate={{ rotate: [20, -20, 20] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-pink-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Couple (Right side - approaching and dancing, mirroring) */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 50, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", delay: 1 }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
                className="relative"
              >
                {/* Male Figure */}
                <div className="w-20 h-48 bg-indigo-600 rounded-t-lg relative mx-auto">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                  <motion.div
                    animate={{ rotate: [20, -20, 20] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-indigo-500 rounded-full"
                  ></motion.div>
                </div>
                {/* Female Figure (paired) */}
                <div className="w-20 h-52 bg-rose-500 rounded-t-lg relative mx-auto mt-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                  <motion.div
                    animate={{ rotate: [-20, 20, -20] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-rose-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hearts Animation in the center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl text-red-400"
              >
                ❤️
              </motion.div>
            </motion.div>
          </div>
        </div>
      )
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center p-4 relative">
      <HeartsBackground />
      <AnimatePresence mode="wait">
        {showContent ? (
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
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayWebsite;
