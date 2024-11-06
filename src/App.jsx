import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState(""); // Fixed typo here: 'setheight' to 'setHeight'

  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState(""); // Changed 'setcolor' to 'setColor'

  const getBmi = () => {
    if (height && weight) {
      // Ensure height and weight are valid numbers
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      
      if (isNaN(weightNum) || isNaN(heightNum)) {
        setBmi("Please enter valid numbers for both weight and height");
        setCategory("");
        setColor(""); // Clear any previous color state
        return;
      }

      const heightInMeters = heightNum / 100; // Convert height to meters
      const bmiValue = weightNum / heightInMeters ** 2;

      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
        setColor("orange"); // Category 'Underweight' has orange color here
      } else if (bmiValue < 24.9) {
        setCategory("Normal Weight");
        setColor("green");
      } else if (bmiValue < 29.9) {
        setCategory("Overweight");
        setColor("orange");
      } else {
        setCategory("Extremely Obese - Dangerous for Health");
        setColor("red");
      }
    } else {
      setBmi("Please enter both weight and height");
      setCategory(""); 
      setColor(""); // Clear previous color
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <label>
        Weight <span>(Kg)</span>
      </label>
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter Weight"
      />

      <label>Height (cm)</label>
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)} 
        placeholder="Enter height in cm"
      />

      <button onClick={getBmi}>Submit</button>
      <p>The BMI is: {bmi}</p>
      <h2 style={{ color: color }}> {category}</h2>
    </div>
  );
}

export default App;
