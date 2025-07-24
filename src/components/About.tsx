import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide quality education that nurtures intellectual growth, character development, and prepares students for future challenges."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a leading educational institution that creates responsible citizens and future leaders of our nation."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, Excellence, Compassion, Innovation, and Respect for diversity form the foundation of our educational philosophy."
    }
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Students Enrolled" },
    { icon: BookOpen, number: "15+", label: "Years of Excellence" },
    { icon: Award, number: "50+", label: "Awards & Recognition" }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4">
            About T.P. Malan School
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Established with a vision to provide quality education, we have been nurturing young minds 
            and building strong foundations for over a decade.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Excellence in Education, Values in Life
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              T.P. Malan School stands as a beacon of quality education in our community. 
              As a government school, we are committed to providing accessible, comprehensive 
              education from Nursery to 12th Standard, ensuring every child has the opportunity 
              to reach their full potential.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Our dedicated faculty, modern facilities, and student-centered approach create 
              an environment where learning thrives. We believe in nurturing not just academic 
              excellence but also character, creativity, and critical thinking skills.
            </p>
            
            {/* Principal's Message */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Principal's Message
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "Education is the most powerful weapon which you can use to change the world. 
                    At T.P. Malan School, we are committed to empowering every student with knowledge, 
                    skills, and values that will serve them throughout their lives."
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mt-2 font-medium">
                    - Dr. Rajesh Kumar, Principal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="School Building"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Our Campus</h4>
                <p className="text-sm opacity-90">Modern facilities for holistic education</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-xl opacity-90">
              Proud milestones in our journey of educational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
