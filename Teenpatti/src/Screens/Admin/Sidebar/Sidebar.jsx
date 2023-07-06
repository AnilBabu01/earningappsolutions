import React, { useEffect } from "react";
import DashboardWrapper from "./DashboardWrapper";
import Addslider from "../Addslider/Addslider";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ setshowadmin }) {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("tokengame");

    if (!token) {
      navigate("/login");
    }
    setshowadmin(true);

    console.log("ttt", token);
  }, []);

  return (
    <>
      <DashboardWrapper value={0} />
      <Addslider setshowadmin={setshowadmin} />
    </>
  );
}
