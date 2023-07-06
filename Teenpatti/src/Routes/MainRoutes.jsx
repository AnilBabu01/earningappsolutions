import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Screens/Client/Header/Navbar";
import Home from "../Screens/Client/Home/Home";
import About from "../Screens/Client/About/About";
import Contact from "../Screens/Client/Contact/Contact";
import Policy from "../Screens/Client/policy/Policy";
import Footer from "../Screens/Client/Footer/Footer";
import Sidebar from "../Screens/Admin/Sidebar/Sidebar";
import AddGame from "../Screens/Admin/AddGame/AddGame";
import Addslider from "../Screens/Admin/Addslider/Addslider";
import AddUpdateGame from "../Screens/Admin/AddUpdateGame/AddUpdateGame";
import Login from "../Screens/Admin/Auth/Login";
import PopularGame from "../Screens/Admin/PopularGame/PopularGame";
export default function MainRoutes() {
  const [showadmin, setshowadmin] = useState(false);
  console.log(showadmin);
  return (
    <>
      {showadmin ? "" : <Navbar />}

      <Routes>
        <Route path="/" element={<Home setshowadmin={setshowadmin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route
          path="/admin"
          element={<Sidebar setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin-panel/addslider"
          element={<Addslider setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin-panel/addgame"
          element={<AddGame setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin-panel/addupdategame"
          element={<AddUpdateGame setshowadmin={setshowadmin} />}
        />

        <Route
          path="/admin-panel/populargame"
          element={<PopularGame setshowadmin={setshowadmin} />}
        />
        <Route path="/login" element={<Login setshowadmin={setshowadmin} />} />
      </Routes>
      {showadmin ? "" : <Footer />}
    </>
  );
}
