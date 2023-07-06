import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WarningIcon from "@mui/icons-material/Warning";
import style from "../Header/Navbar.module.css";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="container" style={{ marginTop: "0px" }}>
        <div className="footer_main">
          <marquee
            style={{
              border: "solid",
              color: "white",
              margin: "0.2rem",
              fontSize: "16px",
              borderWidth: "1px",
            }}
          >
            {/* <WarningIcon style={{ width: "20px" }} /> */}
            Warning :– Teenpatti Master और Teenpatti Gold का नया वाला Version ही
            इस्तेमाल करे, क्योंकि पुराने Version का Recharge And Withdraw Failed
            हो राहा है..!!
          </marquee>
          <div className="main_Tele_div">
            <TelegramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <YouTubeIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <InstagramIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <WhatsAppIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
            <FacebookIcon
              style={{ height: "40px", marginRight: "1rem" }}
              className={style.burger}
            />
          </div>
          <div className="main_booton_link_div">
            <a href="/dsd">About Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhjhs">Contact Us</a>&nbsp;┊ &nbsp;
            <a href="/sdhs">Private Policy</a>&nbsp;┊ &nbsp;
            <a href="/sdds">T&C</a>
          </div>
          <p className="copy_text_right">
            Copyright ©Earningappsolutions All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
