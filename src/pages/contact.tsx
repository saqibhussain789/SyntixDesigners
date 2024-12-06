import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons from react-icons

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Learning Hub?",
      answer: "Learning Hub is an online platform that provides comprehensive tutorials, courses, and resources to help individuals learn new skills and advance their careers."
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the 'Sign Up' button on our homepage and filling in your details to create an account."
    },
    {
      question: "Is there a fee for the courses?",
      answer: "We offer both free and paid courses. Free courses are available to everyone, while paid courses require a subscription or one-time payment."
    },
    {
      question: "Can I access the courses on mobile?",
      answer: "Yes! Our platform is mobile-friendly, and you can access all the courses on your mobile device."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team via the 'Contact Us' page or by emailing support@learninghub.com."
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className=" mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto mb-8">
          <p className="text-sm text-gray-700">
            <a href="/" className="text-blue-600 hover:underline">Home</a> &gt; 
            <span className="text-gray-500"> Contact Us</span>
          </p>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                Reach out to us through any of the following channels:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span className="text-gray-700">+92 (123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="text-gray-700">contact@syntixdesigner.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="text-gray-700">
                    Islamabad, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-600">
                    {activeIndex === index ? (
                      <FaMinus className="text-blue-500" />
                    ) : (
                      <FaPlus className="text-blue-500" />
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
