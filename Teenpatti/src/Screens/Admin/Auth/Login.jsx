import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { backendApiUrl } from "../../../config/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";
export default function Login({ setshowadmin }) {
  const navigate = useNavigate();
  const [showloader, setshowloader] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    setshowadmin(true);
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendApiUrl}login`, {
        email: email,
        password: password,
      });

      if (res?.status) {
        setshowloader(false);
        localStorage.setItem("tokengame", res?.data?.data[0]?.token);
        Swal.fire("Great!", res?.data?.msg, "success");
        navigate("/admin");
      }
    } catch (error) {
      Swal.fire("Error!", error, "error");
    }
  };
  return (
    <>
      <div className="login_form_main">
        <div className="login_content">
          <div className="cash-donation-div">
            <div className="cash-donation-container-innser">
              <p>Admin Login Here</p>
              <form onSubmit={handlesubmit}>
                <div style={{ marginTop: "0.2rem" }}>
                  <label htmlFor="dharamshalaname">Email</label>
                  <input
                    style={{ width: "100%", marginTop: "0.2rem" }}
                    type="textarea"
                    id="dharamshalaname"
                    placeholder="Enter the email"
                    className="forminput_add_user10"
                    value={email}
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  <label htmlFor="dharamshalaname">Password</label>
                  <input
                    style={{ width: "100%", marginTop: "0.2rem" }}
                    type="textarea"
                    id="dharamshalaname"
                    placeholder="Enter the password"
                    className="forminput_add_user10"
                    value={password}
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="save-div-btn">
                  <button
                    className="save-div-btn-btn"
                    style={{ marginLeft: "1rem" }}
                  >
                    {showloader ? (
                      <CircularProgress
                        style={{
                          width: "21px",
                          height: "21px",
                          color: "white",
                        }}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
