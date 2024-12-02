const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col lg:flex-row items-center justify-between px-6 py-12 
             bg-cover bg-center lg:bg-auto lg:bg-center lg:bg-cover bg-[#e0f2f7]"
        style={{
          backgroundImage: 'url("/src/assets/hero.jpg")', // Retained for fallback
        }}
      >
        <div
          className="absolute inset-0 bg-[url('/src/assets/hero.jpg')] bg-cover bg-center lg:bg-cover 
               lg:bg-center lg:bg-auto bg-[length:200%] lg:bg-[length:100%] h-screen bg-no-repeat"
        ></div>
        <div className="relative z-10 lg:w-1/2 text-center lg:text-left text-black lg:text-white">
          <p className="text-3xl lg:text-4xl font-semibold mb-4">
            Elevate Your Skills with SyntixDesigner
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Master Web Development from Scratch
          </h1>
          <p className="text-sm lg:text-lg max-w-2xl mx-auto lg:mx-0 mb-6">
            Unlock your potential with hands-on tutorials. Learn everything from
            HTML, CSS, to JavaScript and advanced concepts. Start building
            professional websites today!
          </p>
          <a
            href="/tutorials"
            className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium hover:bg-blue-500 transition duration-300 text-sm lg:text-base"
          >
            Start Learning
          </a>
        </div>
        <div className="relative z-10 lg:w-1/2 mt-8 lg:mt-0 text-center">
          {/* Decorative Element - Visible only on Mobile */}
          <img
            src="/src/assets/mobile.gif"
            alt="Decorative Element"
            className="block lg:hidden w-full max-w-md mx-auto mt-4"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-[#d0e8d0] text-black text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          We offer top-notch services to enhance your learning journey and help
          you grow as a developer.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-5xl mx-auto">
          {" "}
          {/* Added max-w-5xl and center */}
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 sm:w-64 w-full sm:mx-6 mx-4">
            {" "}
            {/* Added horizontal margin and width adjustments */}
            <img
              src="/src/assets/Web.jpg"
              alt="Web Development"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Learn how to create stunning websites and web apps using modern
              tools.
            </p>
          </div>
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 sm:w-64 w-full sm:mx-6 mx-4">
            {" "}
            {/* Added horizontal margin and width adjustments */}
            <img
              src="/src/assets/ML.jpg"
              alt="Machine Learning"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <p className="text-gray-600">
              Master machine learning techniques and deploy powerful models.
            </p>
          </div>
          <div className="bg-[#F8F8FB] rounded-lg shadow-lg p-6 sm:w-64 w-full sm:mx-6 mx-4">
            {" "}
            {/* Added horizontal margin and width adjustments */}
            <img
              src="/src/assets/GD.jpg"
              alt="Graphic Design"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Graphic Design</h3>
            <p className="text-gray-600">
              Learn the fundamentals of graphic design and create amazing
              visuals.
            </p>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 bg-[#f2f2f2] text-black">
        <h2 className="text-4xl font-bold text-center mb-8">Our Tutorials</h2>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side: Tutorial Cards */}
          <div className="flex flex-wrap justify-center lg:w-1/2 gap-8">
            <div className="bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full sm:w-64 mx-4">
              <img
                src="/src/assets/HTML.jpg"
                alt="HTML Basics"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">HTML Basics</h3>
                <p className="text-gray-600">
                  Learn how to structure web pages with the building blocks of
                  HTML.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 w-full sm:w-64 mx-4">
              <img
                src="/src/assets/CSS.jpg"
                alt="CSS Styling"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">CSS Styling</h3>
                <p className="text-gray-600">
                  Style your web pages with modern and responsive CSS
                  techniques.
                </p>
              </div>
            </div>

            {/* Explore More Button */}
            <div className="mt-8 mb-8 text-center w-full">
              <a
                href="/tutorials"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition duration-300"
              >
                Explore More Tutorials
              </a>
            </div>
          </div>

          {/* Right Side: Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center gap-6 text-center">
            {/* Learn at Your Own Pace Text */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Learn at Your Own Pace
              </h3>
              <p className="text-lg text-gray-600 text-center px-2">
                Dive into our tutorials at your own pace, whether you're a
                beginner or experienced developer. Start mastering web
                development today.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-md items-center py-3 px-3">
              <img
                src="/src/assets/tutorial.jpg"
                alt="Tutorials GIF"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#e0f2f7] text-black">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Our Project</h3>
            <p className="text-lg mb-6">
              SyntixDesigner offers high-quality educational resources for
              aspiring developers and tech enthusiasts. Our mission is to make
              tech education accessible and practical.
            </p>
            <img
              src="/src/assets/tutorials.jpg"
              alt="Project Image"
              className="w-full rounded-lg shadow-lg mt-6"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4">Our Company</h3>
            <p className="text-lg mb-6">
              Founded with the mission of providing practical learning
              experiences, SyntixDesigner has a passionate team committed to
              your educational journey.
            </p>
            <img
              src="/src/assets/tutorials.jpg"
              alt="Company Image"
              className="w-full rounded-lg shadow-lg mt-6"
            />
          </div>
        </div>

        
        {/* Our Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">Our Team</h3>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src="/src/assets/T1.jpg"
                alt="Dilawar Khan"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dilawar Khan</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>

            {/* Team Member Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src="/src/assets/T1.jpg"
                alt="Saqib Hussain"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Saqib Hussain</h3>
              <p className="text-gray-600">Junior Web Developer</p>
            </div>

            {/* Team Member Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src="/src/assets/T2.jpg"
                alt="Ayesha Khan"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ayesha Khan</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>

          {/* Call-to-action Button */}
          <div className="mt-12 text-center">
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500"
            >
              Learn More About Us
            </a>
          </div>
        </div>

      </section>

      <section id="testimonials" className="py-20 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Testimonial Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Learners Say
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "SyntixDesigner has been a game-changer in my web development
                journey. The tutorials are easy to follow, and I learned so much
                in such a short time."
              </p>
              <div className="flex-col items-center text-center">
                <img
                  src="/src/assets/T1.jpg"
                  alt="Testimonial 1"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "I highly recommend SyntixDesigner for anyone who wants to learn
                web development. The content is practical, and the community is
                amazing."
              </p>
              <div className="flex-col items-center text-center">
                <img
                  src="/src/assets/T2.jpg"
                  alt="Testimonial 2"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Alysa Perry</h4>
                  <p className="text-sm text-gray-500">Front-end Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "The tutorials are clear and easy to understand, making it
                perfect for beginners. I learned so much and feel confident in
                my web development skills now."
              </p>
              <div className="flex-col items-center text-center">
                <img
                  src="/src/assets/T3.jpg"
                  alt="Testimonial 3"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Mark Johnson</h4>
                  <p className="text-sm text-gray-500">Junior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-20 bg-[#d0e8d0] text-black text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
          {/* Form on left side */}
          <div className="lg:w-1/2">
            <form className="max-w-lg mx-auto space-y-6 p-6">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Fill out the form below and we'll
                get back to you as soon as possible.
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 px-6 py-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 px-6 py-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full mb-4 px-6 py-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Location and Contact on right side */}
          <div className="lg:w-1/2 space-y-4 p-6">
            <h3 className="mb-4 text-lg font-bold">Our Office:</h3>
            <p className="mb-4">Islamabad, Pakistan</p>
            <p className="mb-4">Phone: +92 3245678023</p>
            <p>Email: info@syntixdesigner.com</p>

            {/* Google Map embedded in the location div */}
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091826!2d144.9537353153196!3d-37.81627944202101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1d8f9e4f893!2s123%20Learning%20Street%2C%20Knowledge%20City!5e0!3m2!1sen!2sus!4v1685399287295!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="mt-8 mb-8">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
export default Home;
