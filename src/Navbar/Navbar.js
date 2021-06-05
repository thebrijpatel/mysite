import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';

import './Navbar.css';

const Navbar = ({name}) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="header">
          <Avatar alt={name} src="me.jpeg"/>
          <Typography variant="h4" style={{fontFamily: 'Ubuntu Mono'}}>{name}</Typography>
          <Button style={{fontFamily: 'Ubuntu Mono', fontSize: 16}} className="resumeButton" color="inherit">DOWNLOAD CV</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
