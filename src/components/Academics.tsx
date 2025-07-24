import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, ChevronRight, GraduationCap, Calculator, Globe, Beaker, Palette, Music } from 'lucide-react';

const Academics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const academicLevels = [
    {
      id: 'nursery',
      title: 'Nursery & Pre-Primary',
      subtitle: 'Ages 3-5',
      description: 'Foundation years focusing on play-based learning and basic skills development.',
      classes: ['Nursery', 'LKG', 'UKG'],
      subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Art & Craft', 'Physical Education'],
      features: ['Play-based Learning', 'Storytelling', 'Creative Activities', 'Social Skills Development']
    },
    {
      id: 'primary',
      title: 'Primary School',
      subtitle: 'Classes 1-5',
      description: 'Building strong fundamentals in core subjects with interactive learning methods.',
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Computer Science', 'Art & Craft', 'Physical Education'],
      features: ['Interactive Learning', 'Project-based Activities', 'Regular Assessments', 'Skill Development']
    },
    {
      id: 'middle',
      title: 'Middle School',
      subtitle: 'Classes 6-8',
      description: 'Comprehensive curriculum preparing students for higher secondary education.',
      classes: ['Class 6', 'Class 7', 'Class 8'],
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art & Craft', 'Physical Education'],
      features: ['Subject Specialization', 'Laboratory Work', 'Group Projects', 'Leadership Development']
    },
    {
      id: 'secondary',
      title: 'Secondary School',
      subtitle: 'Classes 9-10',
      description: 'Board exam preparation with focus on academic excellence and career guidance.',
      classes: ['Class 9', 'Class 10'],
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Applications', 'Physical Education'],
      features: ['Board Exam Preparation', 'Career Counseling', 'Practical Learning', 'Competitive Exam Guidance']
    },
    {
      id: 'senior',
      title: 'Senior Secondary',
      subtitle: 'Classes 11-12',
      description: 'Stream-wise education with specialization in Science, Commerce, and Arts.',
      classes: ['Class 11', 'Class 12'],
      subjects: ['Stream-based Subjects', 'English', 'Optional Languages', 'Physical Education'],
      features: ['Stream Selection', 'College Preparation', 'Entrance Exam Coaching', 'Career Guidance']
    }
  ];

  const subjects = [
    { icon: BookOpen, name: 'English', color: 'from-blue-500 to-blue-600' },
    { icon: Globe, name: 'Hindi', color: 'from-orange-500 to-orange-600' },
    { icon: Calculator, name: 'Mathematics', color: 'from-green-500 to-green-600' },
    { icon: Beaker, name: 'Science', color: 'from-purple-500 to-purple-600' },
    { icon: Users, name: 'Social Studies', color: 'from-red-500 to-red-600' },
    { icon: Palette, name: 'Arts & Craft', color: 'from-pink-500 to-pink-600' },
    { icon: Music, name: 'Music', color: 'from-indigo-500 to-indigo-600' },
    { icon: GraduationCap, name: 'Physical Education', color: 'from-teal-500 to-teal-600' }
  ];

  const currentLevel = academicLevels.find(level => level.id === activeTab);

  return (
    <section id="academics" className="section-padding bg-white dark:bg-gray-900">
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
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive curriculum designed to nurture intellectual growth and prepare students 
            for future challenges from Nursery to 12th Standard.
          </p>
        </motion.div>

        {/* Academic Level Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2"
        >
          {academicLevels.map((level) => (
            <motion.button
              key={level.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(level.id)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
                activeTab === level.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {level.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Level Content */}
        <AnimatePresence mode="wait">
          {currentLevel && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
            >
              {/* Left Content */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentLevel.title}
                </h3>
                <p className="text-base sm:text-lg text-primary-600 dark:text-primary-400 mb-4">
                  {currentLevel.subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  {currentLevel.description}
                </p>

                {/* Classes */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Classes Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLevel.classes.map((className, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {className}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {currentLevel.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ChevronRight className="w-5 h-5 text-secondary-600" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content - Subjects */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Subjects Taught
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {currentLevel.subjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {subject}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subject Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Curriculum
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center card-hover"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${subject.color} rounded-full mb-4`}>
                  <subject.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {subject.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                100%
              </div>
              <div className="text-gray-700 dark:text-gray-300">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                25:1
              </div>
              <div className="text-gray-700 dark:text-gray-300">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                8
              </div>
              <div className="text-gray-700 dark:text-gray-300">Core Subjects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                15+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
