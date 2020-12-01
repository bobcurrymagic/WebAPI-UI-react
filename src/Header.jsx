import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVert from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee Management Portal
          </Typography>
          <div>
            { isMobile ?
            (
              <React.Fragment>
                <IconButton
                  aria-label="options"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/department')}>Department</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/employee')}>Employee</MenuItem>
                </Menu>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/')}>
                  Home
                </Button>
                {' '}
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/department')}>
                  Department
                </Button>
                {' '}
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/employee')}>
                  Employee
                </Button>
              </React.Fragment>
            )
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
