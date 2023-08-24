import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import About from "./screens/About";
import CellGroups from "./screens/CellGroups";
import Zaluus from "./screens/Zaluus";
import Magtaal from "./screens/Magtaal";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log(process.env.REACT_APP_API_URL);

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/cellgroups" element={<CellGroups />} />
          <Route path="/zaluus" element={<Zaluus />} />
          <Route path="/magtaal" element={<Magtaal />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
