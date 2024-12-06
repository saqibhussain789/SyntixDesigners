import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { tutorialsData } from "../data/tutorialsdata";

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tutorial = tutorialsData.find(t => t.id === parseInt(id || ""));
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  if (!tutorial) {
    return <div>Tutorial not found</div>;
  }

  useEffect(() => {
    if (contentRef.current) {
      const headingElements = Array.from(
        contentRef.current.querySelectorAll("h2, h3")
      );
      setHeadings(headingElements as HTMLHeadingElement[]);
    }
  }, [tutorial]);

  const handleTOCClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#E7ECEF] to-[#d3e4f2] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Table of Contents */}
        <div className="lg:w-1/4 bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
          <ul className="space-y-4">
            {headings.map((heading, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTOCClick(heading.id)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {heading.textContent}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tutorial Content */}
        <div
          className="lg:w-3/4 bg-white shadow-lg rounded-lg p-6 overflow-y-auto max-h-screen"
          ref={contentRef}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{tutorial.title}</h1>
          <div className="mb-6">
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-auto object-cover rounded-md shadow-sm"
            />
          </div>

          {/* Render Tutorial Component */}
          <div className="prose max-w-none">{tutorial.details}</div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
