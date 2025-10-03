import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Immersive AR Campus Tour',
    category: 'Augmented Reality',
    description: 'Interactive campus exploration using AR technology.',
  },
  {
    title: 'AI-Powered Workshop Series',
    category: 'Machine Learning',
    description: 'Hands-on sessions on building ML models and applications.',
  },
  {
    title: 'VR Collaboration Space',
    category: 'Virtual Reality',
    description: 'Virtual meeting rooms for remote team collaboration.',
  },
  {
    title: 'Tech Hackathon 2024',
    category: 'Event',
    description: '48-hour innovation challenge with industry partners.',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-glow">
            Recent Projects
          </h2>
          <p className="text-lg text-foreground/80">
            Explore our latest innovations and community initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {project.category}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-glow transition-all">
                {project.title}
              </h3>
              <p className="text-foreground/70">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
