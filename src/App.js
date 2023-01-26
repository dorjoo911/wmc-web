import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setresult] = useState("");
  async function fetchInfo() {
    // console.log(process.env.REACT_APP_API_URL);
    const url = `http://localhost:4000/api/test`;
    const response = await fetch(url);
    const json = await response.json();
    setresult(json);
  }
  return (
    <div>
      <button onClick={fetchInfo}>Click here</button>
      <div>result: {result}</div>
    </div>
  );
}

export default App;
