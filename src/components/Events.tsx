import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronRight, Star, Trophy, BookOpen, Music } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2024-02-15",
      time: "9:00 AM",
      location: "School Playground",
      description: "Inter-house sports competition with various athletic events and games.",
      category: "Sports",
      icon: Trophy,
      color: "from-red-500 to-red-600",
      participants: "All Students",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "2024-02-20",
      time: "10:00 AM",
      location: "School Auditorium",
      description: "Students will showcase their innovative science projects and experiments.",
      category: "Academic",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      participants: "Classes 6-12",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "2024-03-01",
      time: "6:00 PM",
      location: "Main Hall",
      description: "Celebration of diverse cultures with dance, music, and drama performances.",
      category: "Cultural",
      icon: Music,
      color: "from-purple-500 to-purple-600",
      participants: "All Students",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "2024-03-10",
      time: "2:00 PM",
      location: "Classrooms",
      description: "Discussion about student progress and academic performance.",
      category: "Academic",
      icon: Users,
      color: "from-green-500 to-green-600",
      participants: "Parents & Teachers",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Republic Day Celebration",
      date: "2024-01-26",
      time: "8:00 AM",
      location: "School Ground",
      description: "Patriotic celebration with flag hoisting and cultural programs.",
      category: "National",
      icon: Star,
      color: "from-orange-500 to-orange-600",
      participants: "All Students",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Annual Function 2023",
      date: "2023-12-15",
      time: "6:00 PM",
      location: "Main Auditorium",
      description: "Grand celebration with cultural performances and prize distribution.",
      category: "Cultural",
      icon: Trophy,
      color: "from-pink-500 to-pink-600",
      participants: "All Students",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Inter-School Quiz Competition",
      date: "2023-11-20",
      time: "10:00 AM",
      location: "Library Hall",
      description: "Knowledge competition between various schools in the district.",
      category: "Academic",
      icon: BookOpen,
      color: "from-indigo-500 to-indigo-600",
      participants: "Selected Students",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const newsUpdates = [
    {
      title: "New Computer Lab Inaugurated",
      date: "2024-01-15",
      summary: "State-of-the-art computer laboratory with 40 new systems inaugurated by District Collector."
    },
    {
      title: "100% Pass Rate Achievement",
      date: "2024-01-10",
      summary: "T.P. Malan School achieves 100% pass rate in Class 10 board examinations for third consecutive year."
    },
    {
      title: "Best Government School Award",
      date: "2024-01-05",
      summary: "School receives 'Best Government School' award from State Education Department."
    }
  ];

  return (
    <section id="events" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Events & News
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest events, celebrations, and important announcements 
            that make our school community vibrant and engaged.
          </p>
        </motion.div>

        {/* Event Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-700 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {currentEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="md:flex">
                    {/* Event Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${event.color} text-white text-sm font-medium rounded-full`}>
                          {event.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(event.date)}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-2 text-primary-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-secondary-600" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-2 text-accent-600" />
                          {event.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* News & Updates Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Latest News
              </h3>

              <div className="space-y-6">
                {newsUpdates.map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {formatDate(news.date)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {news.summary}
                    </p>
                    <button className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Academic Calendar
                  </a>
                  <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Event Registration
                  </a>
                  <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Photo Gallery
                  </a>
                  <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Newsletter Archive
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Event Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Event Highlights</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Events This Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Participation Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
