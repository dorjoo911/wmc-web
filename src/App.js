import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import AddPost from "./components/AddPosts";
import Loginout from "./Loginout";
import Home from "./Home";
import ListPosts from "./ListPosts";
import About from "./screens/About";
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
          <Route path="/magtaal" element={<Magtaal />} />
          <Route path="/auth" element={<Loginout />}></Route>
          <Route path="/addpost" element={<AddPost />}></Route>
          <Route path="/listpost" element={<ListPosts />}></Route>
          {/* <Route path="/followers" element={<Followers />}></Route> */}
          {/* <Route path="/review" element={<Review />}></Route> */}
          {/* <Route path="/join" element={<Join />}></Route> */}
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
