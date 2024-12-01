import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#E7ECEF] text-black py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Footer Top Section: Description, Quick Links, and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-700">
              SyntixDesigner is a comprehensive learning platform that helps individuals master HTML, CSS, JavaScript, and more. 
              Join our growing community to take your skills to the next level.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-gray-900">FAQs</a></li>
              <li><a href="#resources" className="text-gray-700 hover:text-gray-900">Resources</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700">Email: support@syntixdesigner.com</p>
            <p className="text-gray-700">Phone: +92 3245678902</p>
            <p className="text-gray-700">Address: Islamabad, Pakistan</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-sm">
            Copyright &copy; 2024 SyntixDesigner. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
