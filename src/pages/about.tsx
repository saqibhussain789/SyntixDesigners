import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#E7ECEF] to-[#d3e4f2] py-16 px-4">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-gray-700">
          <a href="/" className="text-blue-600 hover:underline">Home</a> &gt; 
          <span className="text-gray-500"> About Us</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Welcome to Learning Hub! We are passionate about empowering individuals with the knowledge and skills they need to succeed in today’s world.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-12 flex items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              Our mission is to create an accessible platform for learning, offering high-quality tutorials, courses, and resources to help you achieve your goals. Whether you're a beginner or a professional, our platform is here to support you every step of the way.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/src/assets/tutorials.jpg"
              alt="Our Mission"
              className="w-full rounded-lg shadow-lg object-cover"
              style={{ height: '350px', objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example Team Member Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T1.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Dilawar Khan</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T1.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Dilawar Khan</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T3.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Saqib Hussain</h3>
              <p className="text-gray-600">Junior Web Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T4.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
            {/* Additional Team Member Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T5.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sophia Turner</h3>
              <p className="text-gray-600">Content Strategist</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T6.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Daniel Adams</h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T7.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Lucas King</h3>
              <p className="text-gray-600">DevOps Engineer</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/src/assets/T8.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emma Clark</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/src/assets/tutorial.jpg"
                alt="Why Choose Us"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ height: '350px', objectFit: 'cover' }}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 space-x-4">
                Why Choose Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-600 text-lg space-y-2">
                <li>Comprehensive tutorials and courses tailored to all skill levels.</li>
                <li>Expert instructors with real-world experience.</li>
                <li>Affordable and accessible learning materials.</li>
                <li>Focus on practical skills and career development.</li>
                <li>Supportive community to guide your learning journey.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
