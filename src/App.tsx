import React from 'react';
import { Menu, Settings, Check, Play, Mouse } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-gray-700/30">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold">
            fluix<span className="text-[#2596be]">.vip</span>
          </span>
        </div>
        
        <div className="flex items-center">
          <a 
            href="https://discord.gg/NpWNDmqMWG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#2596be] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Enhance your<br />
                <span className="text-[#2596be]">
                  Rust experience
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Our mission over at Lucid is to provide you with the best and most reliable scripts on the market - you won't regret joining us!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing-section');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#2596be] hover:bg-[#1e7a9e] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                BUY NOW
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Play className="w-5 h-5" />
                <span>See How Lucid Works</span>
              </button>
            </div>
          </div>

          {/* Right Settings Panel */}
          <div className="relative">
            <img 
              src="/menu1.png" 
              alt="Lucid Settings Menu" 
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What makes <span className="text-[#2596be]">Fluix</span> the best?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Fluix is an undetected, fully external Rust recoil script that has been
            on the market since 2025. Our script works with any settings, on any
            hardware.
          </p>
        </div>

        <div className="space-y-20">
          {/* Perfect Recoil Compensation - Text Left, Video Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 flex flex-col justify-center pl-8">
              <h3 className="text-3xl font-bold">Perfect Recoil Compensation</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Pixel perfect recoil compensation for every weapon
                & attachment combination in the game.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <video 
                src="https://i.imgur.com/S39Izpg.mp4"
                className="rounded-2xl shadow-2xl w-full max-w-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* AI Weapon & Scope Detection - Video Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center lg:order-1">
              <video 
                src="https://i.imgur.com/S39Izpg.mp4"
                className="rounded-2xl shadow-2xl w-full max-w-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="space-y-6 flex flex-col justify-center lg:order-2">
              <h3 className="text-3xl font-bold">AI Weapon & Scope Detection</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                The fastest and most accurate automatic weapon &
                scope detection on the market, works on any
                resolution, any GUI scale, any skin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Script Pricing</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Enjoy perfect recoil compensation, the most advanced automatic weapon & attachment detection on the market and many other features safely at an unbeatable price.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 1 Month */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-[#2596be] transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold mb-2">
                $18<span className="text-xl text-gray-500">.00</span>
                <span className="text-sm text-gray-500 ml-1">USD</span>
              </div>
              <div className="text-xl font-semibold text-gray-400 mb-4">1 Month</div>
              <div className="bg-[#2596be]/20 text-[#2596be] px-4 py-2 rounded-full text-sm font-medium">
                Most Re-Purchased
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-400">
                <span>Full Access</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>Undetected</span>
              </div>
            </div>

            <button 
              onClick={() => (window as any).storrik?.pay('STORE_k0I08SckPb0ycRojqORXBA4Rq4as86d8', 'PROD_pVZNxOaSuTCvuDSnIAerEg8fRKlDiXZa')}
              className="w-full bg-black/70 hover:bg-[#2596be] text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              BUY NOW
            </button>
          </div>

          {/* 3 Months */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2596be] hover:border-[#2596be] transition-all duration-300 transform hover:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2596be] text-white px-6 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <div className="text-4xl font-bold mb-2">
                $30<span className="text-xl text-gray-500">.00</span>
                <span className="text-sm text-gray-500 ml-1">USD</span>
              </div>
              <div className="text-xl font-semibold text-gray-400 mb-4">3 Months</div>
              <div className="bg-[#2596be]/20 text-[#2596be] px-4 py-2 rounded-full text-sm font-medium">
                Best Value
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-400">
                <span>Full Access</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>Undetected</span>
              </div>
            </div>

            <button 
              onClick={() => (window as any).storrik?.pay('STORE_k0I08SckPb0ycRojqORXBA4Rq4as86d8', 'PROD_2yzrc497Ncg3mvoYi8JLgO2llLXnLLCo')}
              className="w-full bg-[#2596be] hover:bg-[#1e7a9e] text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              BUY NOW
            </button>
          </div>

          {/* Lifetime */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-[#2596be] transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold mb-2">
                $65<span className="text-xl text-gray-500">.00</span>
                <span className="text-sm text-gray-500 ml-1">USD</span>
              </div>
              <div className="text-xl font-semibold text-gray-400 mb-4">Lifetime</div>
              <div className="bg-[#2596be]/20 text-[#2596be] px-4 py-2 rounded-full text-sm font-medium">
                Best Deal
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-400">
                <span>Full Access</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <span>Undetected</span>
              </div>
            </div>

            <button 
              onClick={() => (window as any).storrik?.pay('STORE_k0I08SckPb0ycRojqORXBA4Rq4as86d8', 'PROD_uMvPE0YI5NAiVWbSfjrjfGVXq1VOirt1')}
              className="w-full bg-black/70 hover:bg-[#2596be] text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;