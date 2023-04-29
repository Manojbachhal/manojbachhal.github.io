import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";
import shadows from "@material-ui/core/styles/shadows";

function Navbar() {
  //   console.log(shadows);
  const { theme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      position: "fixed",
      top: "30px",
      right: "30px",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: " var(--primaryFont)",
      fontStyle: " normal",
      fontWeight: " normal",
      fontSize: " 24px",
      background: theme.secondary,
      overflow: "hidden",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: theme.primary,
      position: "absolute",
      right: 40,
      top: 40,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "1.3rem auto",
      borderRadius: "78.8418px",
      background: theme.secondary,
      color: theme.primary,
      width: "85%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      boxSizing: "border-box",
      //   border: "2px solid",
      //   borderColor: theme.primary,
      boxShadow: shadows[12],
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "50%",
      fontSize: "1.3rem",
      fontWeight: 600,
      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
    drawerIcon: {
      fontSize: "1.6rem",
      [t.breakpoints.down("sm")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar--container" id="nav-menu">
        <h1 style={{ color: theme.secondary }} id="user-detail-name">
          {shortname(headerData.name)}
        </h1>

        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label="Menu"
          id="navicon"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <Fade left>
              <NavLink to="/" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>
                    {" "}
                    <span className={"nav-link home"}>Home</span>
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#about"
                smooth={true}
                spy="true"
                duration={2000}
                className={"nav-link about"}
              >
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#education"
                smooth={true}
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Education</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#skills" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Skills</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Projects</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink
                to="/#experience"
                smooth={true}
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Experience</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
