import { Route, Routes } from "react-router-dom";
import Navbar, { NavbarSpacer } from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <NavbarSpacer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */
      </Routes>
    </>
  );
};

export default App;
