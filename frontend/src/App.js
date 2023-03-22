import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss"
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/founder.scss"
import Home from "./components/home/Home";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
