import React from "react";

const JavaScriptTutorial: React.FC = () => {
  return (
    <div>
      <h2 id="introduction">Introduction to JavaScript</h2>
      <p>
        JavaScript is a versatile programming language that enables interactive and dynamic features on web pages.
      </p>

      <h2 id="variables">Variables</h2>
      <p>
        Variables are used to store data. Declare variables using <code>var</code>, <code>let</code>, or <code>const</code>:
      </p>
      <pre>
        <code>
          {`let name = "John";
const age = 25;`}
        </code>
      </pre>

      <h2 id="functions">Functions</h2>
      <p>
        Functions are blocks of reusable code. Here's an example of a simple function:
      </p>
      <pre>
        <code>
          {`function greet(name) {
  return "Hello, " + name;
}

console.log(greet("John")); // Output: Hello, John`}
        </code>
      </pre>

      <h2 id="dom-manipulation">DOM Manipulation</h2>
      <p>
        JavaScript allows you to manipulate the DOM to change content, styles, or structure dynamically:
      </p>
      <pre>
        <code>
          {`document.getElementById("myElement").innerText = "Hello, World!";`}
        </code>
      </pre>

      <h2 id="events">Event Handling</h2>
      <p>
        You can add interactivity by handling events like clicks, form submissions, and more:
      </p>
      <pre>
        <code>
          {`document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});`}
        </code>
      </pre>

      <h2 id="es6-features">Modern JavaScript (ES6+)</h2>
      <p>
        Modern JavaScript introduces new features such as:
      </p>
      <ul>
        <li><code>Arrow functions</code>: 
        <code>const sum = (a, b) = a + b;</code>
        </li>
        <li><code>Template literals</code>: 
        <code>\`Hello, ${"{name}"}!\`</code>
        </li>
        <li><code>Modules</code>: </li>
      </ul>

      <h2 id="debugging">Debugging JavaScript</h2>
      <p>
        Use tools like the browser's developer console and debugging features to troubleshoot your code.
      </p>
      <pre>
        <code>
          {`console.log("Debugging message");`}
        </code>
      </pre>
    </div>
  );
};

export default JavaScriptTutorial;
