import React from 'react';

const Services: React.FC = () => {
  
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Build responsive and dynamic websites using the latest web technologies.',
      icon: '🌐',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description:
        'Create seamless and user-friendly mobile applications for Android and iOS.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description:
        'Design intuitive and visually appealing interfaces for apps and websites.',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description:
        'Grow your online presence with tailored digital marketing strategies.',
      icon: '📈',
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description:
        'Improve your website’s visibility on search engines to attract more traffic.',
      icon: '🔍',
    },
    {
      id: 6,
      title: 'E-commerce Solutions',
      description:
        'Develop and manage robust e-commerce platforms for your business.',
      icon: '🛒',
    },
  ];

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

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
