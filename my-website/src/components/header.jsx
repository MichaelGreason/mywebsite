import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, ClickAwayListener } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();

  function handleClick(event) {
    setAnchor(event.currentTarget);
  }

  function clickAway() {
    setAnchor(null);
  }

  function goHome() {
    navigate("/");
  }

  function goBlog() {
    navigate("/blog");
    setAnchor(null);
  }

  function goResume() {
    navigate("/resume");
    setAnchor(null);
  }

  function goProjects() {
    navigate("/projects");
    setAnchor(null);
  }

  return (
    <>
      <AppBar position="static" className=" h-10">
        <div className="flex justify-between font-serif mx-2 text-xl m-auto">
          <div className="cursor-pointer mt-1" onClick={goHome}>
            Home
          </div>
          <ClickAwayListener onClickAway={clickAway}>
            <Button
              variant="contained"
              disableElevation
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}
            >
              <span className=" font-serif">Go To</span>
            </Button>
          </ClickAwayListener>
          <Menu anchorEl={anchor} open={Boolean(anchor)}>
            <MenuItem disableRipple onClick={goBlog}>
              Blog
            </MenuItem>
            <MenuItem disableRipple onClick={goProjects}>
              Projects
            </MenuItem>
            <MenuItem disableRipple onClick={goResume}>
              Resume
            </MenuItem>
            <MenuItem disableRipple>Contact</MenuItem>
          </Menu>
        </div>
      </AppBar>
    </>
  );
}
