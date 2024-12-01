import React from "react";

const Header: React.FC = () => {
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Tutorials", link: "#tutorials" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#E7ECEF] text-black shadow-md">
        <div className="flex items-center justify-between p-6 lg:p-5 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl lg:text-2xl font-mono tracking-wider text-black hover:text-gray-700 transition-all"
          >
            SyntixDesigner
          </a>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center space-x-8">
            {navItems.map((item) => (
              <a
                href={item.link}
                key={item.name}
                className="text-md text-black hover:text-gray-700 px-3 py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="ml-auto">
            <a
              href="#getstarted"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
