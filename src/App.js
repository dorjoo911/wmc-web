import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log(process.env.REACT_APP_API_URL);

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
