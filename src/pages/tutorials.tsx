import React from 'react';

const Tutorials: React.FC = () => {
  // Example tutorials data with image URLs
  const tutorials = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the fundamentals of React, including components, state, and props.',
      image: '/src/assets/HTML.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts like closures, promises, and async/await.',
      image: '/src/assets/JS.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Tailwind CSS',
      description: 'Master utility-first styling with Tailwind CSS for building modern UIs.',
      image: '/src/assets/CSS.jpg',
      link: '#',
    },
    {
      id: 4,
      title: 'TypeScript Essentials',
      description: 'Learn the basics of TypeScript and how to use it with JavaScript.',
      image: '/src/assets/JS.jpg',
      link: '#',
    },
    {
      id: 5,
      title: 'Node.js for Beginners',
      description: 'Get started with Node.js for building server-side applications.',
      image: '/src/assets/HTML.jpg',
      link: '#',
    },
    {
      id: 6,
      title: 'Next.js Fundamentals',
      description: 'Learn Next.js and how to build server-side rendered React applications.',
      image: '/src/assets/CSS.jpg',
      link: '#',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#E7ECEF] to-[#d3e4f2] py-16 px-4">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-gray-700">
          <a href="/" className="text-blue-600 hover:underline">Home</a> &gt; 
          <span className="text-gray-500"> Tutorials</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Tutorials
        </h1>

        {/* Tutorials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {tutorial.description}
                </p>
                <a
                  href={tutorial.link}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300 transform group-hover:scale-105 flex justify-center items-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
