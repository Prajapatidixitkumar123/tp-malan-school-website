import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Users, Target, TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('academic');

  const categories = [
    { id: 'academic', label: 'Academic', icon: Trophy },
    { id: 'sports', label: 'Sports', icon: Medal },
    { id: 'cultural', label: 'Cultural', icon: Star },
    { id: 'recognition', label: 'Recognition', icon: Award }
  ];

  const achievements = {
    academic: [
      {
        title: "100% Pass Rate",
        description: "Achieved 100% pass rate in Class 10 Board Examinations for 3 consecutive years",
        year: "2021-2023",
        icon: Target,
        color: "from-green-500 to-green-600"
      },
      {
        title: "District Topper",
        description: "Our student Priya Sharma secured 1st position in District Science Olympiad",
        year: "2023",
        icon: TrendingUp,
        color: "from-blue-500 to-blue-600"
      },
      {
        title: "Mathematics Excellence",
        description: "Won State Level Mathematics Competition with 5 students in top 10",
        year: "2022",
        icon: Trophy,
        color: "from-purple-500 to-purple-600"
      },
      {
        title: "Science Fair Winner",
        description: "1st Prize in Regional Science Fair for innovative project on renewable energy",
        year: "2023",
        icon: Award,
        color: "from-orange-500 to-orange-600"
      }
    ],
    sports: [
      {
        title: "Inter-School Cricket Champions",
        description: "Won the District Inter-School Cricket Tournament defeating 15 schools",
        year: "2023",
        icon: Trophy,
        color: "from-yellow-500 to-yellow-600"
      },
      {
        title: "Athletics Excellence",
        description: "Our students won 8 medals in District Athletics Championship",
        year: "2022",
        icon: Medal,
        color: "from-red-500 to-red-600"
      },
      {
        title: "Kabaddi State Champions",
        description: "Girls Kabaddi team won State Level Championship",
        year: "2023",
        icon: Star,
        color: "from-pink-500 to-pink-600"
      },
      {
        title: "Football Tournament",
        description: "Boys football team secured 2nd position in Regional Tournament",
        year: "2022",
        icon: Award,
        color: "from-green-500 to-green-600"
      }
    ],
    cultural: [
      {
        title: "Best Cultural Performance",
        description: "Won 1st Prize in District Cultural Festival for traditional dance performance",
        year: "2023",
        icon: Star,
        color: "from-purple-500 to-purple-600"
      },
      {
        title: "Singing Competition",
        description: "Our student won State Level Classical Singing Competition",
        year: "2022",
        icon: Trophy,
        color: "from-indigo-500 to-indigo-600"
      },
      {
        title: "Drama Festival",
        description: "Best Actor and Best Play awards at Regional Drama Festival",
        year: "2023",
        icon: Medal,
        color: "from-teal-500 to-teal-600"
      },
      {
        title: "Art Exhibition",
        description: "Students' artwork displayed in State Art Exhibition",
        year: "2022",
        icon: Award,
        color: "from-orange-500 to-orange-600"
      }
    ],
    recognition: [
      {
        title: "Best Government School",
        description: "Awarded 'Best Government School' by State Education Department",
        year: "2023",
        icon: Trophy,
        color: "from-gold-500 to-gold-600"
      },
      {
        title: "Excellence in Teaching",
        description: "Principal Dr. Rajesh Kumar received 'Excellence in Education' award",
        year: "2022",
        icon: Star,
        color: "from-blue-500 to-blue-600"
      },
      {
        title: "Digital Innovation",
        description: "Recognized for implementing innovative digital learning methods",
        year: "2023",
        icon: Award,
        color: "from-green-500 to-green-600"
      },
      {
        title: "Community Service",
        description: "Awarded for outstanding community service and social initiatives",
        year: "2022",
        icon: Medal,
        color: "from-purple-500 to-purple-600"
      }
    ]
  };

  const stats = [
    { icon: Trophy, value: "50+", label: "Awards Won", color: "text-yellow-600" },
    { icon: Medal, value: "25+", label: "Sports Medals", color: "text-orange-600" },
    { icon: Star, value: "15+", label: "Cultural Prizes", color: "text-purple-600" },
    { icon: Users, value: "100+", label: "Achievers", color: "text-blue-600" }
  ];

  const timeline = [
    { year: "2023", achievements: 15, highlight: "Best Government School Award" },
    { year: "2022", achievements: 12, highlight: "State Sports Championship" },
    { year: "2021", achievements: 18, highlight: "100% Board Results" },
    { year: "2020", achievements: 10, highlight: "Digital Learning Excellence" }
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating excellence in academics, sports, cultural activities, and community recognition 
            that showcase our commitment to holistic education.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {achievements[activeCategory as keyof typeof achievements].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Achievement Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2"></div>
                )}
                
                {/* Year Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-bold text-lg mb-4">
                  {item.year}
                </div>
                
                {/* Achievement Count */}
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.achievements}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Achievements
                </div>
                
                {/* Highlight */}
                <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {item.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
