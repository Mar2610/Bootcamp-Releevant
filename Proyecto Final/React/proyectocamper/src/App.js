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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import Admin from "./views/Admin";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar />
      {/* <br /> */}
      <Routes>
        {/* <Route path="/booking" element={<PrivateRoute />}> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        {/* </Route> */}
        {/* <Route path="/" element={<PublicRoute />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/form" element={<RegisterForm />} />
        {/* </Route> */}
      </Routes>
      </div>
    </BrowserRouter>
      </>
  );
}

export default App;
