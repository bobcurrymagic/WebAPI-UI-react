import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';

//import "./styles.css";

import 'fontsource-roboto';

import Header from './Header';

import Home from './home/home';
import Department from './department/department';
import Employee from './employee/employee';

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/department" render={props => <Department {...props} />} />
        <Route exact path="/employee" render={props => <Employee {...props} />} />
      </Switch>
    </div>
  );
}
