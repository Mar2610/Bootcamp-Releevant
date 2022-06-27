import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Booking from "./views/Booking";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import Vans from "./views/Vans";
import RegisterForm from "./views/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/form" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
