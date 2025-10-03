import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Award, Zap, Calendar, UserCheck } from 'lucide-react';

// --- Achievement Data ---
const allAchievements = [
  {
    id: 1,
    title: 'Global Hackathon Grand Prize Winner',
    description: 'Secured the top spot in the "Future of Web" category among 500+ teams worldwide with our Immersive 3D Portfolio Builder.',
    icon: Trophy,
    category: 'Competition',
    date: '2024-04-20',
    type: 'Club', // New field
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop&q=80', // New field
    variant: 'gold', 
  },
  {
    id: 2,
    title: 'Top 10 Innovative Projects Showcase',
    description: 'Featured in the national university tech showcase for our pioneering work in decentralized identity management systems.',
    icon: Award,
    category: 'Recognition',
    date: '2024-03-01',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop&q=80',
    variant: 'silver',
  },
  {
    id: 3,
    title: 'Sarah Chen: UX Design Gold Medalist',
    description: 'Sarah won the prestigious "Creative Futures" award for her work on accessible interfaces and inclusive design patterns.',
    icon: UserCheck,
    category: 'Individual',
    date: '2024-03-25',
    type: 'Member', // New field
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80',
    variant: 'member',
  },
  {
    id: 4,
    title: '500+ Active Members Milestone',
    description: 'Our community has grown to over 500 active members, fostering a vibrant environment for learning and collaboration.',
    icon: Users,
    category: 'Community',
    date: '2023-12-15',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1497366812836-8a7c2680e6c5?w=600&h=400&fit=crop&q=80',
    variant: 'community',
  },
  {
    id: 5,
    title: 'AI/ML Bootcamp Completion Rate Record',
    description: 'Achieved a 95% completion rate for our 6-week intensive AI/ML bootcamp, highlighting the dedication of our participants.',
    icon: Zap,
    category: 'Education',
    date: '2024-01-25',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1579203613612-429cc364966a?w=600&h=400&fit=crop&q=80',
    variant: 'default',
  },
  {
    id: 6,
    title: 'Marcus Williams: Certified AWS Cloud Architect',
    description: 'Marcus successfully passed the rigorous AWS Certified Solutions Architect - Professional exam on his first attempt.',
    icon: Award,
    category: 'Certification',
    date: '2024-01-10',
    type: 'Member',
    image: 'https://images.unsplash.com/photo-1533087352352-255d496a32d1?w=600&h=400&fit=crop&q=80',
    variant: 'member',
  },
];

// --- Custom Tailwind Badge Styling (Assumes you have a 'primary' color defined) ---
const getBadgeClass = (variant) => {
  switch (variant) {
    case 'gold':
      return 'bg-amber-400 text-amber-900 hover:bg-amber-500 shadow-lg shadow-amber-500/50';
    case 'silver':
      return 'bg-slate-300 text-slate-800 hover:bg-slate-400 shadow-lg shadow-slate-400/50';
    case 'community':
      return 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/50';
    case 'member':
      return 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/50';
    default:
      return 'bg-primary/90 backdrop-blur-sm';
  }
};

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Achievements Component ---
export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Club', 'Member'

  const filteredAchievements = allAchievements.filter(achievement => 
    activeFilter === 'All' || achievement.type === activeFilter
  );
  
  const filterButtons = [
    { label: 'All Achievements', value: 'All' },
    { label: 'Club Milestones', value: 'Club' },
    { label: 'Member Spotlights', value: 'Member' },
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation onWatchReel={() => {}} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Our Legacy
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Club Achievements ✨
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the dedication, innovation, and success of our talented community.
            </p>
          </motion.div>

          {/* Filter/Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center gap-4 mb-12 max-w-3xl mx-auto flex-wrap"
          >
            {filterButtons.map((button) => (
              <Button
                key={button.value}
                variant={activeFilter === button.value ? 'default' : 'outline'}
                className={activeFilter === button.value ? 'neon-button' : 'hover:bg-primary/10 transition-colors'}
                onClick={() => setActiveFilter(button.value)}
              >
                {button.label}
              </Button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // Key change forces re-animation when filter changes
            key={activeFilter} 
          >
            {filteredAchievements.length > 0 ? (
              filteredAchievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                const badgeClass = getBadgeClass(achievement.variant);

                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    custom={index} // Use index for stagger delay
                  >
                    <Card className="glass-panel hover:neon-glow transition-all duration-500 group overflow-hidden h-full flex flex-col">
                      
                      {/* Image at the top of the card */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        {/* Achievement Type Badge */}
                        <Badge className={`absolute top-4 right-4 text-xs uppercase ${achievement.type === 'Club' ? 'bg-primary/90' : 'bg-green-600/90'} backdrop-blur-sm`}>
                          {achievement.type}
                        </Badge>
                      </div>

                      <CardHeader className="p-6 pb-2 flex-grow">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                           {/* Icon */}
                          <div className={`p-1 rounded-full ${achievement.variant === 'gold' ? 'bg-amber-400/20 text-amber-400' : 'bg-primary/20 text-primary'}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        
                        <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                          {achievement.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {achievement.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-6 pt-0">
                         {/* Category Badge at the bottom */}
                         <Badge className={`text-xs uppercase tracking-wider mt-4 ${badgeClass}`}>
                            Category: {achievement.category}
                          </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
                <div className="md:col-span-3 text-center p-12 text-muted-foreground">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg">No {activeFilter} achievements found yet. Check back soon!</p>
                </div>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}