import React from "react";
import WebImage from ".././assets/Web.jpg";
import MLImage from ".././assets/ML.jpg";
import HTMLImage from ".././assets/HTML.jpg";
import T24Image from ".././assets/icons/24-7.png";
import PLImage from ".././assets/icons/personalized-learning.png";
import ETImage from ".././assets/icons/expert-tutors.png";
import ComSupImage from ".././assets/icons/com-sup.png";
import TrackImage from ".././assets/icons/progress-tracking.png";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.jpg";
import T4 from "../assets/T4.jpg";
import T5 from "../assets/T5.jpg";
import T6 from "../assets/T6.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <section
        id="hero"
        className="h-screen flex flex-col lg:flex-row items-center justify-between px-6 py-12 
             bg-cover bg-center lg:bg-center lg:bg-cover bg-[#e0f2f7] pt-20 lg:pt-0"
        style={{
          backgroundImage: 'url("/src/assets/hero.jpg")',
          // backgroundSize: "cover", // Ensure background size covers the entire section
          // backgroundPosition: "center", // Ensure it's centered in the viewport
          
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center lg:bg-center bg-no-repeat h-full w-full"></div>
        <div className="relative z-10 lg:w-1/2 text-center lg:text-left text-black lg:text-white">
          <p className="text-3xl lg:text-4xl font-semibold mb-4">
            Welcome to SyntixDesigner
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Master Web Development from Scratch
          </h1>
          <p className="text-sm lg:text-lg max-w-2xl mx-auto lg:mx-0 mb-6">
            Unlock your potential with hands-on tutorials. Learn everything from
            HTML, CSS, to JavaScript and advanced concepts. Start building
            professional websites today!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="/tutorials"
              className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium hover:bg-blue-500 transition duration-300 text-sm lg:text-base"
            >
              Start Learning
            </a>
            <a
              href="/get-started"
              className="bg-green-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium hover:bg-green-500 transition duration-300 text-sm lg:text-base"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="relative z-10 lg:w-1/2 mt-8 lg:mt-0 text-center">
          <img
            src="/src/assets/mobile.gif"
            alt="Decorative Element"
            className="block lg:hidden w-full max-w-md mx-auto mt-4"
          />
        </div>
      </section>

      {/* Featured Services Section */}
      <section
        id="services"
        className="py-20 bg-[#d0e8d0] text-black text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-8">Our Featured Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Explore our top-rated services designed to help you excel.
        </p>
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 w-full sm:w-64">
            <img
              src={WebImage}
              alt="Web Development"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Learn how to create stunning websites and web apps using modern
              tools.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 w-full sm:w-64">
            <img
              src={MLImage}
              alt="Machine Learning"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <p className="text-gray-600">
              Master machine learning techniques and deploy powerful models.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 w-full sm:w-64">
            <img
              src={MLImage}
              alt="Artificial Intelligence"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">
              Artificial Intelligence
            </h3>
            <p className="text-gray-600">
              Dive into AI to understand algorithms, deep learning, and
              real-world applications.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 w-full sm:w-64">
            <img
              src={HTMLImage}
              alt="UI/UX Design"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Create user-friendly designs and seamless user experiences.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition duration-300 text-lg"
          >
            Explore All Services
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 bg-[#f2f2f2] text-black text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="w-full sm:w-64 bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src={T24Image}
                alt="24/7 Access Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Access</h3>
            <p className="text-gray-600">
              Learn at your own pace with round-the-clock access to resources.
            </p>
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-64 bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src={ETImage}
                alt="Expert Tutors Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Tutors</h3>
            <p className="text-gray-600">
              Get guidance from industry professionals with years of experience.
            </p>
          </div>
          {/* Card 3 */}
          <div className="w-full sm:w-64 bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src={ComSupImage}
                alt="Community Support Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-600">
              Join a vibrant community of learners and get your questions
              answered.
            </p>
          </div>
          {/* Card 4 */}
          <div className="w-full sm:w-64 bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src={PLImage}
                alt="Personalized Learning Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              Tailored recommendations to meet your unique learning needs and
              goals.
            </p>
          </div>
          {/* Card 5 */}
          <div className="w-full sm:w-64 bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src={TrackImage}
                alt="Progress Tracking Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your progress with detailed analytics and reports.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#f0f4f8]">
        <div className="mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Learners Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T1}
                  alt="John Doe"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "The tutorials are well-structured and easy to follow. I was
                able to learn new skills in web development at my own pace, and
                the community support is exceptional!"
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T2}
                  alt="Jane Smith"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-sm text-gray-500">
                    Machine Learning Engineer
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "I never thought learning machine learning could be this easy!
                The step-by-step tutorials made complex concepts simple and
                approachable. The expert tutors were always available to help."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T3}
                  alt="Mark Lee"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Mark Lee</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "The platform provided me with a solid foundation in web
                development. The lessons were detailed, and I especially loved
                the hands-on projects. I feel much more confident in my coding
                skills."
              </p>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T4}
                  alt="Anna Kim"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Anna Kim</h4>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "The personalized learning path and progress tracking tools were
                incredibly helpful. I could see my growth every step of the way,
                and the support from the community was invaluable."
              </p>
            </div>
            {/* Testimonial 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T5}
                  alt="Olivia Brown"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Olivia Brown</h4>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "I highly recommend this platform to anyone looking to level up
                their web development skills. The resources are top-notch, and I
                love the flexibility it provides in terms of learning at my own
                pace."
              </p>
            </div>
            {/* Testimonial 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={T6}
                  alt="Kevin Johnson"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Kevin Johnson</h4>
                  <p className="text-sm text-gray-500">App Developer</p>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                "The platform's in-depth tutorials and project-based approach
                helped me build real-world applications. I was able to start
                building my portfolio with confidence!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
