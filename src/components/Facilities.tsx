import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Monitor, 
  Beaker, 
  Dumbbell, 
  Music, 
  Palette, 
  Bus, 
  Utensils,
  Heart,
  Shield,
  Wifi,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Facilities: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "Well-stocked library with over 5,000 books, digital resources, and quiet study areas for students.",
      features: ["5,000+ Books", "Digital Resources", "Reading Rooms", "Study Areas"],
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description: "State-of-the-art computer laboratory with latest hardware and software for digital learning.",
      features: ["40+ Computers", "High-Speed Internet", "Latest Software", "Interactive Learning"],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Beaker,
      title: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs for hands-on scientific learning.",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Safety Equipment"],
      images: [
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Comprehensive sports facilities including playground, indoor games, and fitness equipment.",
      features: ["Large Playground", "Indoor Games", "Sports Equipment", "Fitness Area"],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Music,
      title: "Music & Arts Room",
      description: "Dedicated spaces for music, dance, and arts activities to nurture creative talents.",
      features: ["Musical Instruments", "Art Supplies", "Performance Stage", "Practice Rooms"],
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and snacks for students and staff.",
      features: ["Nutritious Meals", "Hygienic Kitchen", "Seating Area", "Healthy Snacks"],
      images: [
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Medical Room",
      description: "Well-equipped medical facility with trained staff for student health and emergency care.",
      features: ["First Aid", "Health Checkups", "Emergency Care", "Medical Records"],
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school bus service covering various routes in the surrounding areas.",
      features: ["Multiple Routes", "GPS Tracking", "Trained Drivers", "Safety Measures"],
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const additionalFeatures = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Campus-wide internet connectivity" },
    { icon: Shield, title: "Security System", description: "24/7 security and CCTV monitoring" },
    { icon: Camera, title: "Smart Classrooms", description: "Interactive whiteboards and projectors" },
    { icon: Palette, title: "Art Studio", description: "Dedicated space for creative activities" }
  ];

  const nextImage = (facilityIndex: number) => {
    const facility = facilities[facilityIndex];
    setActiveImageIndex((prev) => (prev + 1) % facility.images.length);
  };

  const prevImage = (facilityIndex: number) => {
    const facility = facilities[facilityIndex];
    setActiveImageIndex((prev) => (prev - 1 + facility.images.length) % facility.images.length);
  };

  return (
    <section id="facilities" className="section-padding bg-white dark:bg-gray-900">
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
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our modern infrastructure and well-equipped facilities provide the perfect 
            environment for comprehensive learning and development.
          </p>
        </motion.div>

        {/* Main Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image Carousel */}
              <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${index}-${activeImageIndex}`}
                    src={facility.images[activeImageIndex]}
                    alt={facility.title}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Navigation Buttons */}
                {facility.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(index)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center`}>
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {facility.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${facility.color} rounded-full`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Additional Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Infrastructure Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                25+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Classrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                5
              </div>
              <div className="text-gray-700 dark:text-gray-300">Laboratories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                10,000+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Sq. Ft. Campus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <div className="text-gray-700 dark:text-gray-300">WiFi Coverage</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
