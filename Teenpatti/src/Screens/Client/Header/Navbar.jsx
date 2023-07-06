import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuIcon from "@mui/icons-material/Menu";
import unnamed from "../../../assets/unnamed.png";
import logo from "../../../assets/lo.png";
const Navbar = ({ showRoomOptions }) => {
  const [isMobile, setisMobile] = useState(false);
  const [profileimg, setprofileimg] = useState("");

  useEffect(() => {}, [isMobile, profileimg]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <nav className={style.navbar}>
          <div className={style.logo}>
            <img src={logo} alt=" Logo" />
            <p className={style.logotext}>Earningappsolutions</p>
          </div>

          <ul
            className={isMobile ? style.mobilelinks : style.navlinks}
            onClick={() => setisMobile(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/policy"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Policy
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Blog
              </NavLink>
            </li> */}
          </ul>
          <i
            style={{ marginRight: "20px" }}
            onClick={() => setisMobile(!isMobile)}
            className={style.mobileMenuIcon}
          >
            {isMobile ? (
              <>
                <div className={style.hideinphone}>
                  <YouTubeIcon
                    CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                  <TelegramIcon
                    CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                  <CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>

                <div className={style.showburinphone}>
                  <CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={style.hideinphone}>
                  <YouTubeIcon
                    CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                  <TelegramIcon
                    CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                  <MenuIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>

                <div className={style.showburinphone}>
                  <MenuIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>
              </>
            )}
          </i>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
