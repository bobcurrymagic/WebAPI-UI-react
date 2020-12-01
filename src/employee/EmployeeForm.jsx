import React from 'react';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
//import { TextField } from '@material-ui/core';

import { useForm } from '../useForm';
import { Form } from '../useForm';

import TextFieldStandard from '../components/controls/TextFieldStandard';
//import { TextFieldStandard } from '../components/controls/TextFieldStandard';

import SelectStandard from '../components/controls/SelectStandard';

import DatePickerStandard from '../components/controls/DatePickerStandard';

import ButtonStandard from '../components/controls/ButtonStandard';

import * as employeeData from '../services/empoyeeData';

const initialFieldValues = {
  employeeId: 0,
  employeeName: '',
  departmentName: '',
  dateOfJoining: new Date()
}

export default function EmployeeForm() {

  const { values, setValues, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <h6>Employee Form</h6>
      <Grid container>
        <Grid item xs={6}>
          <TextFieldStandard
            label = 'Employee Name'
            name = 'employeeName'
            value = {values.employeeName}
            onChange = {handleInputChange}
          />
          <SelectStandard
            label = 'Department Name'
            name = 'departmentName'
            value = {values.departmentName}
            onChange = {handleInputChange}
            options = {employeeData.getAllDepartmentNames()}
          />
          <DatePickerStandard
            label = 'Hire Date'
            name = 'dateOfJoining'
            value = {values.dateOfJoining}
            onChange = {handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid container item xs={12} direction = 'row' justify = 'flex-end' alignItems = 'center'>
          <ButtonStandard
            variant = 'contained'
            color = 'primary'
            size = 'large'
            text = 'Submit'
          />
        </Grid>
      </Grid>
    </Form>
  )
}
