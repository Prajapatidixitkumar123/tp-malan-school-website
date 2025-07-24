import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  Download, 
  Upload,
  GraduationCap,
  AlertCircle
} from 'lucide-react';

const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    class: '',
    previousSchool: '',
    dateOfBirth: '',
    gender: '',
    category: ''
  });

  const admissionProcess = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form with all required details",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents including birth certificate and previous school records",
      icon: Upload,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Verification",
      description: "School administration will verify all submitted documents",
      icon: CheckCircle,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive admission confirmation and complete fee payment",
      icon: GraduationCap,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const feeStructure = [
    { class: "Nursery - UKG", admission: "₹500", monthly: "₹300", annual: "₹1,000", total: "₹4,600" },
    { class: "Class 1-5", admission: "₹600", monthly: "₹400", annual: "₹1,200", total: "₹6,000" },
    { class: "Class 6-8", admission: "₹700", monthly: "₹500", annual: "₹1,500", total: "₹7,700" },
    { class: "Class 9-10", admission: "₹800", monthly: "₹600", annual: "₹2,000", total: "₹9,200" },
    { class: "Class 11-12", admission: "₹1,000", monthly: "₹700", annual: "₹2,500", total: "₹11,900" }
  ];

  const requiredDocuments = [
    "Birth Certificate",
    "Previous School Transfer Certificate",
    "Previous School Mark Sheet",
    "Aadhar Card (Student & Parents)",
    "Passport Size Photographs (4 copies)",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Medical Certificate"
  ];

  const importantDates = [
    { event: "Application Start", date: "March 1, 2024", status: "active" },
    { event: "Application Deadline", date: "April 15, 2024", status: "upcoming" },
    { event: "Document Verification", date: "April 20-25, 2024", status: "upcoming" },
    { event: "Admission Confirmation", date: "May 1, 2024", status: "upcoming" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <section id="admissions" className="section-padding bg-white dark:bg-gray-900">
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
            Admissions 2024-25
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our school community and embark on a journey of academic excellence 
            and character development. Admissions are now open for all classes.
          </p>
        </motion.div>

        {/* Admission Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'process', label: 'Admission Process' },
            { id: 'fees', label: 'Fee Structure' },
            { id: 'documents', label: 'Required Documents' },
            { id: 'apply', label: 'Apply Online' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Admission Process */}
          {activeTab === 'process' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Admission Process
                </h3>
                <div className="space-y-6">
                  {admissionProcess.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Important Dates
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  {importantDates.map((date, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {date.event}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {date.date}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        date.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {date.status === 'active' ? 'Active' : 'Upcoming'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fee Structure */}
          {activeTab === 'fees' && (
            <div>
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Fee Structure 2024-25
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Class</th>
                      <th className="px-6 py-4 text-center">Admission Fee</th>
                      <th className="px-6 py-4 text-center">Monthly Fee</th>
                      <th className="px-6 py-4 text-center">Annual Charges</th>
                      <th className="px-6 py-4 text-center">Total (Annual)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {fee.class}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                          {fee.admission}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                          {fee.monthly}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                          {fee.annual}
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-primary-600 dark:text-primary-400">
                          {fee.total}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Important Notes:
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Fees are subject to annual revision</li>
                      <li>• Late payment charges: ₹50 per month</li>
                      <li>• Scholarships available for meritorious students</li>
                      <li>• Fee concession available for economically weaker sections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Required Documents */}
          {activeTab === 'documents' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Download Forms
                </h3>
                <div className="space-y-4">
                  {[
                    'Admission Application Form',
                    'Medical Certificate Form',
                    'Character Certificate Format',
                    'Fee Payment Challan'
                  ].map((form, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="text-gray-700 dark:text-gray-300">{form}</span>
                      </div>
                      <Download className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Online Application Form */}
          {activeTab === 'apply' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Online Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Student Information */}
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Student Information
                    </h4>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Class Applying For *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Class</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={`class-${i + 1}`}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Parent Information */}
                  <div className="md:col-span-2 mt-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Parent Information
                    </h4>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Previous School
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Category</option>
                      <option value="general">General</option>
                      <option value="obc">OBC</option>
                      <option value="sc">SC</option>
                      <option value="st">ST</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
