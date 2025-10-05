import { useState, useEffect } from "react";
import GreetingCard from "./components/GreetingCard";
import "./App.css";

function App() {
  // 🧠 State variables
  const [names, setNames] = useState([]); // Greeting list
  const [input, setInput] = useState(""); // Input value
  const [isDark, setIsDark] = useState(false); // Theme mode

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem("names"));
    if (savedNames) setNames(savedNames);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);


  function addGreeting() {
    if (input.trim() === "") return;
    setNames([...names, input]);
    setInput("");
  }


  function resetGreetings() {
    setNames([]);
    localStorage.removeItem("names");
  }


  function deleteGreeting(nameToDelete) {
    const updated = names.filter((name) => name !== nameToDelete);
    setNames(updated);
  }


  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "App dark" : "App"}>
      <h1>🎉 Greeting Dashboard</h1>
      <p>Total Greetings: {names.length}</p>

      <input
        type="text"
        placeholder="Enter a name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addGreeting} disabled={!input.trim()}>
        Add
      </button>
      <button onClick={resetGreetings}>Reset</button>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>

      <div className="cards">
        {names.length === 0 ? (
          <p className="empty">No greetings yet. Add one above 👆</p>
        ) : (
          names.map((name, index) => (
            <GreetingCard
              key={index}
              name={name}
              onDelete={() => deleteGreeting(name)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
