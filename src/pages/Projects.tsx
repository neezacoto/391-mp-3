import "../App.css";
/* eslint-disable @typescript-eslint/no-explicit-any */
const Projects = () => {
  function operation(op: any) {
    const a = document.getElementById("f-number"); // Get first number input
    const b = document.getElementById("s-number"); // Get second number input
    const c = document.getElementById("o-number"); // Get the output field for result
    if (c) {
      c.style.color = "black"; // Set the result color to black initially
    }
    op(a, b, c); // Call the appropriate operation function with inputs and output
  }

  // Function for addition operation
  function b_add(x: any, y: any, c: { innerHTML: number }) {
    const a = x.value;
    const b = y.value;
    c.innerHTML = Number(a) + Number(b); // Display the sum of two numbers
  }

  // Function for subtraction operation
  function b_sub(
    x: any,
    y: any,
    c: { style: { color: string }; innerHTML: number }
  ) {
    const a = x.value;
    const b = y.value;
    const t = Number(a) - Number(b); // Calculate the difference

    // If the result is negative, change output text color to red
    if (t < 0) {
      c.style.color = "red";
    }

    c.innerHTML = t; // Display the result
  }

  // Function for multiplication operation
  function b_mul(x: any, y: any, c: { innerHTML: number }) {
    const a = x.value;
    const b = y.value;
    c.innerHTML = Number(a) * Number(b); // Display the product of two numbers
  }

  // Function for division operation
  function b_div(x: any, y: any, c: { innerHTML: number }) {
    const a = x.value;
    const b = y.value;
    c.innerHTML = Number(a) / Number(b); // Display the quotient of two numbers
  }

  // Function for exponentiation operation (power)
  function b_pow(x: any, y: any, c: { innerHTML: number }) {
    let a = x.value;
    const b = y.value;

    // If the exponent is zero, return 1
    if (b == 0) {
      // Weak equality (==) used intentionally
      c.innerHTML = 1;
      return;
    }

    const d = a; // Store the base value

    // Calculate the power using a loop
    for (let i = 0; i < b - 1; i++) {
      a = d * a; // Multiply base by itself b-1 times
    }

    c.innerHTML = a; // Display the result of exponentiation
  }

  // Function to clear the calculator inputs and reset the output
  function b_c(
    x: { value: null },
    y: { value: null },
    c: { innerHTML: string }
  ) {
    x.value = null; // Clear the first number input
    y.value = null; // Clear the second number input
    c.innerHTML = "_"; // Reset the output display to default
  }
  return (
    <div className="welcome-container">
      {/* <!-- Project section with external link to website --> */}
      <div className="plug">
        <h1>Projects:</h1>
        <div className="cool-button">
          <a href="https://christianrudder.me/" target="_blank">
            My Website
          </a>
        </div>
      </div>

      {/* <!-- Basic calculator with two number inputs and operation buttons --> */}
      <div className="calculator">
        <div className="number-inputs">
          {/* <!-- Input for the first number --> */}
          <label>First Number: </label>
          <input type="number" id="f-number" />
        </div>
        <div className="number-inputs">
          {/* <!-- Input for the second number --> */}
          <label>Second Number: </label>
          <input type="number" id="s-number" />
        </div>

        {/* <!-- Operation buttons for basic math (+, -, *, /, power, clear) --> */}
        <div className="calc-options">
          <button className="operator" onClick={() => operation(b_add)}>
            +
          </button>
          <button className="operator" onClick={() => operation(b_sub)}>
            -
          </button>
          <button className="operator" onClick={() => operation(b_mul)}>
            *
          </button>
          <button className="operator" onClick={() => operation(b_div)}>
            /
          </button>
          <button className="operator" onClick={() => operation(b_pow)}>
            **
          </button>
          <button className="operator" onClick={() => operation(b_c)}>
            C
          </button>
        </div>

        {/* <!-- Output field to display result --> */}
        <div className="output">
          <p id="o-number">_</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
