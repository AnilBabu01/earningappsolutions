import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { useLocation } from "react-router-dom";
const drawerWidth = "17%";

const openedMixin = (theme) => ({
  width: drawerWidth,
  minWidth: "240px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const StyledListItemButton = styled(ListItemButton)(() => ({
  "&.Mui-selected": {
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 13,
      bottom: 0,
      background: "#44ce42",
      height: "24px",
      width: "4px",
    },
    backgroundColor: "#fff !important",
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DesktopDrawar = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  value,
}) => {
  const stylesag = {
    listActive: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 13,
        bottom: 0,
        background: "#44ce42",
        height: "24px",
        width: "4px",
      },
      backgroundColor: "#fff !important",
    },
    ListText: {
      "&.MuiListItemText-root": {
        fontFamily: "'Nunito', sans-serif !important",
        fontWeight: 600,
        lineHeight: "20px",
      },
    },
    DrawerSecTitle: {
      textAlign: "left",
      marginLeft: "25px !important",
      fontSize: "13px !important",
      color: "rgb(111, 126, 140)",
      fontFamily: "'Nunito', sans-serif !important",
      textTransform: "uppercase",
      fontWeight: 400,
      padding: "5px 0px",
    },
    ListButtonIcon: {
      transform: "rotate(90deg)",
      transition: "all 0.2s ease-out !important",
    },
    ListinBtnclose: {
      transform: "rotate(0deg)",
      transition: "all 0.2s ease-out !important",
    },
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [openedTab, setOpenedTab] = React.useState(0);
  const [activeTabId, setActiveTabId] = React.useState(0);

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#E70000",
        },
      }}
      // onMouseMove={() => handleDrawerOpen()}
      // onMouseOut={() => handleDrawerClose()}
    >
      <DrawerHeader>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {open ? (
            <>
              {/* <img
                src={unnamed}
                style={{
                  width: "180px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "20%",
                }}
                alt="Logo"
              /> */}
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon htmlColor="#8e94a9" />
              </IconButton>
            </>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                {/* <img
                  src={unnamed}
                  style={{
                    width: "70px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                  alt="Logo"
                /> */}
                <IconButton onClick={handleDrawerOpen}>
                  <ArrowForwardIosIcon htmlColor="#8e94a9" />
                </IconButton>
              </div>
            </>
          )}
        </Box>
      </DrawerHeader>
      <Divider />
      <List>
        <Tooltip title="Add Slider Img" placement="left-end">
          <StyledListItemButton
            selected={activeTabId === "/admin"}
            onClick={() => {
              setActiveTabId(location.pathname);
              handleDrawerClose();
              navigate("/admin");
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.2,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CurrencyExchangeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ root: stylesag.ListText }}
              primary="Add Slider Img"
              sx={{ opacity: open ? 1 : 0, ml: 0.8 }}
            />
          </StyledListItemButton>
        </Tooltip>
        <Tooltip title="Add Popular game" placement="left-end">
          <StyledListItemButton
            selected={activeTabId === "/admin-panel/populargame"}
            onClick={() => {
              setActiveTabId(location.pathname);
              handleDrawerClose();
              navigate("/admin-panel/populargame");
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.2,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CurrencyExchangeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ root: stylesag.ListText }}
              primary="Popular game"
              sx={{ opacity: open ? 1 : 0, ml: 0.8 }}
            />
          </StyledListItemButton>
        </Tooltip>

        <Tooltip title="Add A Game" placement="left-end">
          <StyledListItemButton
            selected={activeTabId === "/admin-panel/addgame"}
            onClick={() => {
              setActiveTabId(location.pathname);
              handleDrawerClose();
              navigate("/admin-panel/addgame");
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.2,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CurrencyExchangeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ root: stylesag.ListText }}
              primary="Add A Game"
              sx={{ opacity: open ? 1 : 0, ml: 0.8 }}
            />
          </StyledListItemButton>
        </Tooltip>

        <Tooltip title="Add Version" placement="left-end">
          <StyledListItemButton
            selected={activeTabId === "/admin-panel/addupdategame"}
            onClick={() => {
              setActiveTabId(location.pathname);
              handleDrawerClose();
              navigate("/admin-panel/addupdategame");
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.2,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CurrencyExchangeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ root: stylesag.ListText }}
              primary="Add Version"
              sx={{ opacity: open ? 1 : 0, ml: 0.8 }}
            />
          </StyledListItemButton>
        </Tooltip>
      </List>
    </Drawer>
  );
};

export default DesktopDrawar;
