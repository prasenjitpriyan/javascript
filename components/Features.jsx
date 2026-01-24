import {
  Brain,
  Eye,
  Image as ImageIcon,
  Layers,
  Video,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: <Eye className="text-minion-yellow" size={32} />,
    title: 'Visual Execution Flow',
    description:
      'Watch how the engine executes your code line-by-line with our visualizer.',
  },
  {
    icon: <ImageIcon className="text-blue-400" size={32} />,
    title: 'Illustrated Concepts',
    description:
      'Closures, Prototypes, and the Event Loop explained with intuitive diagrams.',
  },
  {
    icon: <Brain className="text-pink-500" size={32} />,
    title: 'Mental Models',
    description:
      'Build robust mental models effectively by seeing the data structures.',
  },
  {
    icon: <Video className="text-red-500" size={32} />,
    title: 'Interactive Animations',
    description:
      "Don't just stare at static text. Interact with animated code blocks.",
  },
  {
    icon: <Zap className="text-yellow-500" size={32} />,
    title: 'Memory Visualization',
    description: 'See how the Stack and Heap management works in real-time.',
  },
  {
    icon: <Layers className="text-purple-500" size={32} />,
    title: 'Deep Dive Mode',
    description:
      'Toggle between high-level logic and low-level engine details.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-dark-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            Learn Differently.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our brain processes visuals 60,000x faster than text. <br />
            ScriptLens leverages this to make you a master developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-minion-yellow/30">
              <div className="mb-6 bg-white dark:bg-dark-charcoal w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
