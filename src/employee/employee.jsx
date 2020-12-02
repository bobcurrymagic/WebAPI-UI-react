import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import EmployeeForm from './EmployeeForm';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

var ActivateAddEditEmployeeComponent = 'false';

const Employee = props => {
    const classes = useStyles();

    return (
        <div>
            <h1>Employee</h1>
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </div>
    )
}

export default Employee;
