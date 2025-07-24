import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, BookOpen, Users, Star } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "20+ years",
      subjects: ["Educational Leadership", "Administration"],
      email: "principal@tpmalan.edu",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Best Principal Award 2022", "Educational Excellence Award"],
      specialization: "Educational Leadership & School Management"
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Principal",
      qualification: "M.Ed., B.Ed.",
      experience: "15+ years",
      subjects: ["English", "Literature"],
      email: "vp@tpmalan.edu",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Best Teacher Award 2021", "Literary Excellence Award"],
      specialization: "English Literature & Language Development"
    },
    {
      name: "Mr. Amit Patel",
      position: "Senior Mathematics Teacher",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "12+ years",
      subjects: ["Mathematics", "Statistics"],
      email: "amit.math@tpmalan.edu",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Mathematics Excellence Award", "Innovation in Teaching"],
      specialization: "Advanced Mathematics & Problem Solving"
    },
    {
      name: "Dr. Sunita Verma",
      position: "Science Department Head",
      qualification: "Ph.D. in Physics, M.Sc., B.Ed.",
      experience: "18+ years",
      subjects: ["Physics", "Chemistry", "General Science"],
      email: "sunita.science@tpmalan.edu",
      phone: "+91 98765 43213",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Science Teacher of the Year", "Research Excellence Award"],
      specialization: "Physics & Scientific Research"
    },
    {
      name: "Mrs. Kavita Singh",
      position: "Hindi Teacher",
      qualification: "M.A. Hindi, B.Ed.",
      experience: "10+ years",
      subjects: ["Hindi", "Sanskrit"],
      email: "kavita.hindi@tpmalan.edu",
      phone: "+91 98765 43214",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Hindi Literature Award", "Cultural Excellence Award"],
      specialization: "Hindi Literature & Cultural Studies"
    },
    {
      name: "Mr. Ravi Kumar",
      position: "Computer Science Teacher",
      qualification: "MCA, B.Tech CSE",
      experience: "8+ years",
      subjects: ["Computer Science", "Information Technology"],
      email: "ravi.cs@tpmalan.edu",
      phone: "+91 98765 43215",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      achievements: ["Technology Innovation Award", "Digital Education Excellence"],
      specialization: "Programming & Digital Literacy"
    }
  ];

  const departments = [
    {
      name: "Primary Education",
      teachers: 8,
      subjects: ["English", "Hindi", "Mathematics", "EVS"],
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Secondary Education",
      teachers: 12,
      subjects: ["All Core Subjects", "Electives"],
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Science & Mathematics",
      teachers: 6,
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Languages & Arts",
      teachers: 5,
      subjects: ["English", "Hindi", "Arts", "Music"],
      icon: Star,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="faculty" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Our Dedicated Faculty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet our experienced and passionate educators who are committed to nurturing 
            young minds and fostering academic excellence.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong>Qualification:</strong> {member.qualification}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Specialization:</strong> {member.specialization}
                  </p>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subjects:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Achievements:
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-yellow-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Departments Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Departments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dept.color} rounded-full mb-4`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {dept.name}
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {dept.teachers}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Teachers
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {dept.subjects.join(", ")}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faculty Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Faculty Excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">31+</div>
              <div className="text-lg opacity-90">Total Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Avg. Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Post Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Awards Won</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;
