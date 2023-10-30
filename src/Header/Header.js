import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../asset/cityquestlogo.svg";
import flag from "../asset/flag.svg";
import bag from "../asset/bag.svg";
import Rightsidebox from "./Rightsidebox";
import SelectLabels from "./Selectlabels";
// import { styles } from "../../constant";
// import { Link } from "react-scroll";
import "./Header.css";
import { red } from "@mui/material/colors";

const drawerWidth = 240;
const navItems = [
  // { label: "", routes: "home" },
  { label: "Home", routes: "/home", style: { color: "red" } },
  { label: "Explore The City", routes: "/explorecity" },
  { label: "Q&A", routes: "/q&a" },
  { label: "Contact", routes: "/contact" },
  {
    label: (
      <div style={{ display: "flex" }}>
        <SelectLabels />
      </div>
    ),

  },
  { label: <img src={bag}></img>, routes: "/bag" },
  { label: <Rightsidebox />, routes: "boxrigth" },
];

// const detailsNav = [{ label: "Contact Us", routes: "contact" }];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('location',location,id)
  let active = false;

  if (location.pathname !== "/") {
    active = true;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", position: "relative" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img
            src={logo}
            onClick={() => handleLogo()}
            alt="logo"
            height={50}
            width={150}
          />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <Link
            // activeClass="none"
            to={item.routes}
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            style={{
              textDecoration: "none",
            }}
          // onSetActive={this.handleSetActive}
          >
            <ListItem key={key} disablePadding onClick={handleDrawerToggle}>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  color: "#111",
                  fontWeight: 600,
                }}
              >
                <ListItemText
                  primary={item?.label}
                  style={{
                    color: "white",
                    display: item.routes === "bag" ? "none" : "flex",
                    justifyContent: "center",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const buttonClick = (value, event) => {
    // console.log("item", value);

    navigate(value?.routes?.toString());
  };

  const handleLogo = () => {
    // debugger;
    navigate("/");
  };

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: "1" }}>
      <Box sx={{}}>
        <AppBar
          className="nav_bar"
          component="nav"
          sx={{
            background:
              "linear-gradient(89.86deg, #3077A1 0.76%, #314989 100%)",
            padding: "10px 20px 0 20px",
            position: "sticky",
            boxShadow: "none",
            "@media screen and (min-width: 768px) and (max-width: 952px)": {
              padding: "10px 0px 0 0px",
            },
            "@media screen and (max-width: 768px)": {
              padding: "10px 0px 0 0",
            },
          }}
        >
          <Toolbar
          // style={{
          //   background: "orange",
          // }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: {} }}
              style={
                {
                  // backgroundColor: "#EEBB58",
                }
              }
            >
              <img
                className="main_logo"
                src={logo}
                onClick={() => handleLogo()}
                alt="logo"
                style={{ cursor: "pointer", marginTop: 0 }}
                height={60}
                width={168}
              />
            </Typography>

            <Box
              sx={{
                display: { flexGrow: 1, xs: "none", sm: "block" },
                "@media screen and (max-width: 900px)": {
                  justifyContent: "end !important",
                },
              }}
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                // background: "black",
                // textDecoration: completed ? 'line-through' : 'none'
              }}
            >
              <div
                className="nav-list"
                style={{
                  // fontFamily: styles.fonts,
                  // marginLeft: "30px",
                  // marginRight: "20px",
                  // display: "block",
                  // justifyContent: "center",
                  // alignItems: "center",
                  textTransform: "capitalize",
                  // "@media screen and (max-width: 900px)": {
                  //   display: "none !important",
                  // },
                }}
              >
                <div className="leftbox" style={{ order: "1" }}>
                  {navItems.map((item, key) => (
                    <Button
                      key={key}
                      sx={{
                        color: "#2E2E2E",
                        // backgroundColor: "red",
                        // marginRight: "10px",
                        "@media screen and (min-width: 768px) and (max-width: 952px)":
                        {
                          marginRight: "10px",
                        },
                        // "@media screen and (max-width: 768px)":
                        // {
                        //   marginRight: "0px",
                        //   paddingRight:"0px"
                        // },
                      }}
                      // onClick={(e) => buttonClick(item, e)}
                      style={{
                        // fontFamily: styles.fonts,
                        textTransform: "capitalize",
                      }}
                    >
                      <Link
                        activeClass="link"
                        // onSetActive={{backf}}
                        to={item.routes}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        className="headeritem"

                      // onSetActive={this.handleSetActive}
                      >
                        <p
                          className="nav_p"
                          style={{
                            fontSize: "16px",
                            // backgroundColor: "blue",
                            textTransform: "capitalize",
                          }}
                        >
                          <p
                            style={{
                              // fontFamily: styles.fonts,
                              // fontSize: "16px",
                              // backgroundColor: "blue",

                              textTransform: "capitalize",
                            }}
                          >
                            {item?.label}
                          </p>
                        </p>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              <img src={bag} className="bagimage"></img>
              {/* {props.data} */}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white", ml: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background:
                  "linear-gradient(89.86deg, #3077A1 0.76%, #314989 100%)",
                // color: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
