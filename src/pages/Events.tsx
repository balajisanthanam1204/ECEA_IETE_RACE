import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    title: 'AI & Machine Learning Workshop',
    date: '2024-04-10',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Lab, Building A',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&h=400&fit=crop',
    description: 'Hands-on workshop covering neural networks and deep learning fundamentals',
    status: 'Registration Open'
  },
  {
    title: 'Web3 & Blockchain Hackathon',
    date: '2024-04-25',
    time: '9:00 AM - 9:00 PM',
    location: 'Main Auditorium',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    description: '12-hour hackathon focused on decentralized applications',
    status: 'Early Bird'
  }
];

const futureEvents = [
  {
    title: 'UI/UX Design Sprint',
    date: '2024-05-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Design Studio',
    attendees: 30,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    description: 'Intensive design thinking and prototyping session',
    status: 'Coming Soon'
  },
  {
    title: 'Tech Talk: Industry Leaders',
    date: '2024-06-01',
    time: '6:00 PM - 8:00 PM',
    location: 'Conference Hall',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    description: 'Panel discussion with tech industry professionals',
    status: 'Save the Date'
  },
  {
    title: 'IoT Innovation Challenge',
    date: '2024-06-20',
    time: '11:00 AM - 6:00 PM',
    location: 'Innovation Lab',
    attendees: 60,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    description: 'Build smart devices and compete for prizes',
    status: 'Announced'
  }
];

const pastEvents = [
  {
    title: 'Annual Tech Fest 2024',
    date: '2024-02-15',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    highlights: 'Amazing turnout with 10+ workshops and competitions'
  },
  {
    title: 'React & Frontend Masterclass',
    date: '2024-01-20',
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    highlights: 'Deep dive into modern React patterns and best practices'
  },
  {
    title: 'Cybersecurity Workshop',
    date: '2023-12-10',
    attendees: 65,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    highlights: 'Ethical hacking and security fundamentals covered'
  }
];

export default function Events() {
  return (
    <div className="relative min-h-screen">
      <Navigation onWatchReel={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Events
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Join Our Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Workshops, hackathons, and tech talks to expand your skills and network
            </p>
          </motion.div>

          {/* Upcoming Events - Highlighted */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2 text-primary">Upcoming Events</h2>
              <p className="text-muted-foreground">Don't miss out on these amazing opportunities</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-panel neon-glow h-full overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm animate-pulse">
                        {event.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-display">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          {event.attendees} registered
                        </div>
                      </div>
                      <Button className="w-full" size="lg">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Future Events */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2">Future Events</h2>
              <p className="text-muted-foreground">Mark your calendars for these upcoming events</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureEvents.map((event, index) => (
                <EventCard key={event.title} event={event} index={index} />
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2">Past Events</h2>
              <p className="text-muted-foreground">Relive the highlights from our previous events</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">{event.title}</CardTitle>
                      <CardDescription>{event.highlights}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />
          <Badge className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm">
            {event.status}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-display">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {event.location}
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Get Notified
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
