import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import LearningResources from '../components/LearningResources';
import { BookOpen, MessageCircle } from 'lucide-react';
import Particles from '../components/Particles';

const TutorPage = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'resources'>('chat');

  return (
    <div className="relative min-h-screen mt-8">
      {/* Full Background Particles - Electric Blue theme */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={['#00D4FF', '#0099FF', '#ffffff']}
          particleCount={1200}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
            AI Clarity Tutor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Learn Clarity development with personalized AI assistance
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/20 backdrop-blur-sm rounded-xl p-1 border border-cyan-400/30">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'chat'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg shadow-cyan-500/40'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span>AI Assistant</span>
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'resources'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg shadow-cyan-500/40'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 rounded-2xl bg-black/20 backdrop-blur-md border border-cyan-400/20 p-6 shadow-lg shadow-cyan-500/10">
          {activeTab === 'chat' ? <ChatInterface /> : <LearningResources />}
        </div>
      </div>

      {/* Floating Glow Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyan-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-700"></div>
    </div>
  );
};

export default TutorPage;
