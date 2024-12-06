import React from 'react';
import Tutorial from "../assets/tutorial.jpg"
import Tutorial1 from "../assets/tutorials.jpg"
import T1 from "../assets/T1.jpg"
import T2 from "../assets/T2.jpg"
import T3 from "../assets/T3.jpg"
import T4 from "../assets/T4.jpg"
import T5 from "../assets/T5.jpg"
import T6 from "../assets/T6.jpg"
import T7 from "../assets/T7.jpg"

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
        <section className="mb-12 flex items-center justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              Our mission is to create an accessible platform for learning, offering high-quality tutorials, courses, and resources to help you achieve your goals. Whether you're a beginner or a professional, our platform is here to support you every step of the way.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={Tutorial1}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Team Member Cards */}
            {[
              { name: 'Dilawar Khan', role: 'Founder & CEO', imgSrc: T1 },
              { name: 'Dilawar Khan', role: 'Lead Developer', imgSrc: T1 },
              { name: 'Saqib Hussain', role: 'Junior Web Developer', imgSrc: T2 },
              { name: 'Michael Lee', role: 'Marketing Specialist', imgSrc: T3 },
              { name: 'Sophia Turner', role: 'Content Strategist', imgSrc: T4 },
              { name: 'Daniel Adams', role: 'Backend Developer', imgSrc: T5},
              { name: 'Lucas King', role: 'DevOps Engineer', imgSrc: T6 },
              { name: 'Emma Clark', role: 'Customer Support', imgSrc: T7 },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={Tutorial}
                alt="Why Choose Us"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ height: '350px', objectFit: 'cover' }}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
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
