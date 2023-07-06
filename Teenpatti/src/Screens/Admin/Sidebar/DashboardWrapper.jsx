import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import WindowResize from "./WindowResize";
import DesktopDrawar from "./DesktopDrawar";
import logoApp from "./logoApp.jpeg";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./DashboardWrapper.css";

const DashboardWrapper = () => {
  const navigate = useNavigate();
  const resize = WindowResize();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("tokengame");
    Swal.fire("Great!", "You Have Logout successfully!", "success");
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ bgcolor: "#E70000", color: "black", paddingLeft: "3.7%" }}
      >
        <Toolbar>
          {resize.isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}

          {resize.isMobile ? (
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block", fontWeight: "800" } }}
              >
                Welcome to earning app solutions
              </Typography>
            </>
          ) : (
            <>
              <span
                style={{ marginLeft: open ? "14%" : "0.1%", display: "flex" }}
              >
                <CurrencyExchangeIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block", fontWeight: "800" },
                    ml: 2,
                  }}
                >
                  Welcome to earning app solutions
                </Typography>
              </span>
            </>
          )}
          <div
            onClick={() => logout()}
            style={{ marginLeft: "65%", cursor: "pointer" }}
          >
            <p style={{ fontSize: "18px" }}>Logout</p>
          </div>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: 1,
          resize,
        }}
      >
        <DesktopDrawar
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        />

        <Box
          sx={{
            width: {
              xs: "100%",
              sm: `calc(100% - 65px)`,
            },
            marginLeft: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardWrapper;
