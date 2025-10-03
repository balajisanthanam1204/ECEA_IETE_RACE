import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
  },
  {
    icon: Rocket,
    title: 'Exploration',
    description: 'Diving deep into emerging technologies and immersive experiences.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a collaborative space for students passionate about tech.',
  },
];

const logoPartners = [
  { src: '/svce.png', name: 'Partner 4' },
  { src: '/ecea.png', name: 'Partner 1' },
  { src: '/iete.png', name: 'Partner 2' },
  { src: '/race.png', name: 'Partner 3' },


];

export default function About() {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const logoInView = useInView(logoRef, { once: true, margin: '-150px' });

  return (
    <section ref={ref} className="py-32 px-8 relative">
      <div className="container mx-auto">


        <motion.div
          ref={logoRef}
          initial={{ opacity: 0 }}
          animate={logoInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-glow flex justify-center mb-12">
            About Us
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Desktop View */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={logoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mb-16"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-3xl flex justify-center">
                  <img 
                    src={logoPartners[0].src} 
                    alt={logoPartners[0].name}
                    className="w-66 h-21 object-contain"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {logoPartners.slice(1, ).map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={logoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.15 }}
                    className="flex justify-center"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full flex justify-center">
                      <img 
                        src={partner.src} 
                        alt={partner.name}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden grid grid-cols-1 gap-6 max-w-sm mx-auto">
              {logoPartners.map((partner, idx) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={logoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
                  className="flex justify-center"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full flex justify-center">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

                <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-20"
        >

          <p className="text-lg text-foreground/80 leading-relaxed">
           The Electronics and engineering association also known as ECEA is
            running efficiently through years in svce. The main objective of
             this association is to collectively work as a team to organize and
              improve the technical and non technical skills of the students. 
              It is not only for the students of ECE but also for students from 
              other departments. The association is headed by our HOD,
              DR kumaradharan , DR T J Jeyaprabha , DR balaji and Mary. Several events 
              like Make-a-thon , enigma and workshops take place every 
              year headed by different office bearers. In the year 2020-2021 
              placement training activities were organized for 2nd year ECE 
              students in order to create an edge for them. These events were 
              planned to help the students to enhance and develop skills that 
              are required for placements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:neon-glow transition-all duration-300 group"
              >
                <FeatureIcon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}