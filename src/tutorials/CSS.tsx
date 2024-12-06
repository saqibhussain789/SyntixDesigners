import React from "react";

const CSSTutorial: React.FC = () => {
  return (
    <div>
      <h2 id="introduction">Introduction to CSS</h2>
      <p>
        CSS (Cascading Style Sheets) is a style sheet language used to control the presentation of HTML elements on a webpage.
      </p>

      <h2 id="syntax">CSS Syntax</h2>
      <p>
        CSS rules consist of a selector and a declaration block. For example:
      </p>
      <pre>
        <code>
          {`p {
  color: red;
  font-size: 16px;
}`}
        </code>
      </pre>

      <h3 id="selectors">CSS Selectors</h3>
      <p>
        Selectors are used to target specific HTML elements. Common selectors include:
      </p>
      <ul>
        <li>Type selectors (e.g., <code>p</code>, <code>div</code>)</li>
        <li>Class selectors (e.g., <code>.className</code>)</li>
        <li>ID selectors (e.g., <code>#idName</code>)</li>
      </ul>

      <h3 id="properties">CSS Properties</h3>
      <p>
        Properties define the style rules for the selected elements. Examples include:
      </p>
      <ul>
        <li><code>color</code>: Changes text color.</li>
        <li><code>margin</code>: Adds space around elements.</li>
        <li><code>padding</code>: Adds space inside elements.</li>
      </ul>

      <h2 id="box-model">CSS Box Model</h2>
      <p>
        The box model consists of margins, borders, padding, and the content area. It's essential for layout design.
      </p>
      <img
        src="/src/assets/css-box-model.png"
        alt="CSS Box Model"
        className="w-full h-auto"
      />

      <h2 id="responsive-design">Responsive Design</h2>
      <p>
        Responsive design ensures your website looks good on all devices. Techniques include:
      </p>
      <ul>
        <li>Media queries</li>
        <li>Flexbox and Grid</li>
        <li>Viewport meta tag</li>
      </ul>
    </div>
  );
};

export default CSSTutorial;
