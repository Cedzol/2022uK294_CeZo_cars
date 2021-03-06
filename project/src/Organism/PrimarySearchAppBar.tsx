import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import Register from "../Molecules/Register"
import Login from "../Molecules/Login"
import {useNavigate} from "react-router-dom";
import "../StyleSheets/Nav.css"

export default function PrimarySearchAppBar() {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    let initLogIn: boolean = (localStorage.getItem("log") == 'true')
    const [showRegister, setShowRegister] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(initLogIn);
    const navigate = useNavigate();


    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        handleMenuClose()
        localStorage.setItem("log", "false")
        localStorage.setItem("token", '')
        setIsLoggedIn(false)
        navigate("/")
    }

    const handleLogin = () => {
        setIsLoggedIn(false);
        setShowRegister(false)
        setShowLogIn(true);
    }

    const handleChange = (data: boolean) => {
        setIsLoggedIn(data)
        setShowLogIn(false)
        setShowRegister(false)
    }

    const handleRegister = () => {
        setShowLogIn(false)
        setIsLoggedIn(false);
        setShowRegister(true);
    }

    useEffect(() => {
        let log;

        if (localStorage.getItem("log") === "true") {
            log = true;
        } else {
            log = false;
        }
        setIsLoggedIn(log)
    })


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    function handleShowList() {
        navigate("/cars")
    }

    function handleShowCreate() {
        navigate("/car")
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        <div className={"inline"}></div>
                        <button className={"noStyle"} onClick={() => handleShowList()}>List</button>
                        <div className={"inline"}></div>
                        <button className={"noStyle"} onClick={() => handleShowCreate()}>Create</button>
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    {isLoggedIn ?
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Box>
                        : <div>
                            <Button color="inherit" onClick={handleLogin}>Login</Button>
                            <Button color="inherit" onClick={handleRegister}>register</Button>
                        </div>
                    }

                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {showRegister ? <Register/> : null}
            {showLogIn ? <Login onChange={handleChange}/> : null}

        </Box>
    );
}
