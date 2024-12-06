import React, { useState } from 'react';

const Services: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build responsive and dynamic websites using the latest web technologies.',
      icon: '🌐',
      category: 'Programming',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Create seamless and user-friendly mobile applications for Android and iOS.',
      icon: '📱',
      category: 'Programming',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Design intuitive and visually appealing interfaces for apps and websites.',
      icon: '🎨',
      category: 'Design',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Grow your online presence with tailored digital marketing strategies.',
      icon: '📈',
      category: 'Marketing',
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Improve your website’s visibility on search engines to attract more traffic.',
      icon: '🔍',
      category: 'Marketing',
    },
    {
      id: 6,
      title: 'E-commerce Solutions',
      description: 'Develop and manage robust e-commerce platforms for your business.',
      icon: '🛒',
      category: 'Programming',
    },
  ];

  const categories = ['All', 'Programming', 'Design', 'Marketing'];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-r from-[#E7ECEF] to-[#d3e4f2] py-16 px-4">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-gray-700">
          <a href="/" className="text-blue-600 hover:underline">Home</a> &gt;
          <span className="text-gray-500"> Services</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h1>

        {/* Filters and Search Bar Container */}
        <div className="flex justify-between mb-8">
          {/* Categories/Filters */}
          <div className="flex space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search for a service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Featured Tutorials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development 101</h3>
              <p className="text-gray-600 mb-4">Learn the basics of web development in this step-by-step guide.</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">Get started with building mobile apps using the latest technologies.</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design Essentials</h3>
              <p className="text-gray-600 mb-4">Master the fundamentals of UI/UX design for apps and websites.</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
