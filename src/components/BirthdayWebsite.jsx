import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BirthdayWebsite() {
  const [now, setNow] = useState(new Date());
  const target = new Date(new Date().getFullYear(), 9, 6, 0, 0, 0); // Oct 6 local

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div className="space-y-12">
      {/* Header + countdown */}
      <div className="text-center">
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="text-5xl font-bold text-pink-300">Happy Birthday 💖</motion.h1>
        <p className="mt-3 text-xl text-white/80">Countdown to October 6</p>
        <div className="mt-4 text-2xl font-mono text-white">
          {diff === 0 ? "It's your special day! 🎉" : `${days}d ${hours}h ${minutes}m ${seconds}s`}
        </div>
      </div>

      {/* Video */}
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}} className="text-3xl font-semibold text-center text-pink-300 mb-4">A Special Message</motion.h2>
        <video className="w-full rounded-lg shadow-lg" controls muted playsInline>
          <source src="/video/birthday-message.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gallery */}
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}} className="text-3xl font-semibold text-center text-pink-300 mb-4">Our Memories</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["photo1.jpg","photo2.jpg","photo3.png","photo4.jpg","photo5.png","photo6.jpg"].map((p,i)=>(
            <div key={i} className="rounded-lg overflow-hidden shadow-md">
              <img src={`/images/${p}`} alt={`memory ${i+1}`} className="w-full h-48 object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
