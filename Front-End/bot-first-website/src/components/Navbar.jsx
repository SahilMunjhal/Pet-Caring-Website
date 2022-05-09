import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_user } from "./Redux/User/action";

export const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] =useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const dispatch=useDispatch();
  const {user}=useSelector((store)=>store.user);

  useEffect(()=>{
    if(user.token){
      setAuth(true);
    }
  },[user]);

  const logout=()=>{
       setAuth(false);
  };
  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pet House
            </Typography>
            <Link to={`/`}>
              <Button id="navbarbutton" color="inherit">
                Home
              </Button>
            </Link>
            <Link to={`/listing/create`}>
              <Button id="navbarbutton" color="inherit">
                Add Pet House
              </Button>
            </Link>
            {auth ? (
              <div>
                <Button
                  sx={{ backgroundColor:"green",color:"white"}}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to={`/signin`}>
                <Button id="navbarbutton" color="inherit">
                  SignIn
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
