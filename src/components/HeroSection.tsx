import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/hero-video.webm"
            type="video/webm"
          />
          {/* Fallback image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          From Campus Lab to Championship Podium.
          <span className="block text-3xl md:text-5xl font-normal text-white mt-2">
            Bandhayudha ABURobocon
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting every gear, circuit, and algorithm toward a single championship ambition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-tech-blue hover:bg-tech-blue-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-elevation-medium hover:shadow-elevation-high"
          >
            Explore Our Robots
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;