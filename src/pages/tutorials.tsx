import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { tutorialsData } from '../data/tutorialsdata'; // Import data

const Tutorials: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories for filtering tutorials
  const categories = ['All', 'Programming', 'Design', 'Business'];

  // Filter tutorials based on search query and selected category
  const filteredTutorials = tutorialsData.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch; // You can omit category filtering if you don't have it
  });
  

  return (
    <div className="bg-gradient-to-r from-[#E7ECEF] to-[#d3e4f2] py-16 px-4">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-gray-700">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link> &gt; 
          <span className="text-gray-500"> Tutorials</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Tutorials
        </h1>

        {/* Filters and Search Bar */}
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
              placeholder="Search by Topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Popular Tutorials Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.slice(0, 3).map((tutorial) => (
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
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  <Link
                    to={`/tutorials/${tutorial.id}`}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300 transform group-hover:scale-105 flex justify-center items-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial) => (
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
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <Link
                  to={`/tutorials/${tutorial.id}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300 transform group-hover:scale-105 flex justify-center items-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
