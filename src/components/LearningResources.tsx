import { ExternalLink, Book, Video, Code, FileText } from 'lucide-react';

const LearningResources = () => {
  const resources = [
    {
      type: 'documentation',
      icon: Book,
      title: 'Clarity Language Reference',
      description: 'Complete documentation for the Clarity smart contract language',
      link: '#',
      difficulty: 'Beginner',
    },
    {
      type: 'tutorial',
      icon: Video,
      title: 'Building Your First Clarity Contract',
      description: 'Step-by-step video tutorial for creating smart contracts',
      link: '#',
      difficulty: 'Beginner',
    },
    {
      type: 'example',
      icon: Code,
      title: 'Smart Contract Examples',
      description: 'Collection of real-world Clarity contract examples',
      link: '#',
      difficulty: 'Intermediate',
    },
    {
      type: 'guide',
      icon: FileText,
      title: 'Stacks Blockchain Guide',
      description: 'Understanding the Stacks blockchain and Bitcoin integration',
      link: '#',
      difficulty: 'Intermediate',
    },
    {
      type: 'tutorial',
      icon: Video,
      title: 'Advanced Clarity Patterns',
      description: 'Learn advanced patterns and best practices',
      link: '#',
      difficulty: 'Advanced',
    },
    {
      type: 'documentation',
      icon: Book,
      title: 'Testing Clarity Contracts',
      description: 'Guide to testing and debugging Clarity smart contracts',
      link: '#',
      difficulty: 'Intermediate',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30';
      case 'Intermediate':
        return 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-blue-300 border-blue-400/30';
      case 'Advanced':
        return 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-gradient-to-r from-gray-600/20 to-gray-600/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 shadow-lg">
          Learning Resources
        </h2>
        <p className="text-gray-300">
          Comprehensive resources to master Clarity and Stacks development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div
              key={index}
              className="group bg-black/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-cyan-400/20 shadow-lg shadow-cyan-400/20">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Ready to Start Building?
        </h3>
        <p className="text-gray-300 mb-6">
          Join our community of developers building the future of smart contracts on Bitcoin
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 border border-cyan-400/30"
          >
            Join Discord Community
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;