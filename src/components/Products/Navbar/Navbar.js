import React from 'react'
import "./Navbar.css";
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft"><sapn className="logo">DD Lab Grown Diamond</sapn></div>
        <div className="topRight">
            <Tooltip title="Notification">
            <div className="topbarIconsContainer">
                <NotificationsNone/>
            </div>
            </Tooltip>
            <Tooltip title="Language">
            <div className="topbarIconsContainer">
                <Language/>
            </div>
            </Tooltip>
            <Link to={"/Cart"} className='link'>
            <Tooltip title="Cart">
            <div className="topbarIconsContainer">
                <ShoppingCartIcon/>
            </div>
            </Tooltip>
            </Link>
            <Link to={"/DistibutorProfile"} className='link'>
            <Tooltip title="Profile">
            <AccountCircleIcon/>
            </Tooltip>
            </Link>
        </div>
      </div>
    </div>
  )
}