import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import FilteredFoods from "./views/FilteredFoods";
import Foods from "./views/Foods";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="max-w-full">
				<Header />
			</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/FilteredFoods/:slug" element={<FilteredFoods/>}/>
          <Route path="/Foods" element={<Foods/>}/>
        </Routes>
        <div className="max-w-full">
				<Footer />
			</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
