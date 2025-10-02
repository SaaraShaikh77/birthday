import React from "react";
import HeartsBackground from "./components/HeartsBackground";
import BirthdayWebsite from "./components/BirthdayWebsite";

export default function App() {
  return (
    <div className="min-h-screen flex items-start justify-center py-16 px-4 relative text-white">
      <HeartsBackground />
      <div className="relative z-10 w-full max-w-6xl">
        <BirthdayWebsite />
      </div>
    </div>
  );
}
