import React, { useState } from "react";
import camera from "../../../assets/camera.png";
import Swal from "sweetalert2";
import { backendApiUrl } from "../../../config/config";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const formData = new FormData();

function Addform({ setOpen }) {
  const [img1, setimg1] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [showloader, setshowloader] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setshowloader(true);
      formData.set("sliderimg", img1);

      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.post(`${backendApiUrl}uploadslider`, formData);

      if (res?.data.status) {
        setOpen(false);
        setshowloader(false);
        Swal.fire("Great!", res?.data?.msg, "success");
      }
    } catch (error) {
      // Swal.fire("Error!", error, "error");
    }
  };

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form onSubmit={handlesubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              {previewprofile1 ? (
                <>
                  <div className="main_img_divvvv">
                    <img className="dharamshala_imgggg" src={previewprofile1} />
                  </div>
                </>
              ) : (
                <>
                  <div className="main_img_divvvv">
                    <img src={camera} />
                  </div>
                </>
              )}

              <div className="formdivvv_imf">
                <input
                  type="file"
                  onChange={(e) => {
                    setimg1(e.target.files[0]);

                    setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
            </div>

            <div className="save-div-btn">
              <button className="save-div-btn-btn">
                {showloader ? (
                  <CircularProgress
                    style={{
                      width: "21px",
                      height: "21px",
                      color: "white",
                    }}
                  />
                ) : (
                  "Save"
                )}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="save-div-btn-btn-cancel"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addform;
