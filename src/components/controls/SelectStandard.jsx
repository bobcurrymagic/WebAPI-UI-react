import React from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

export default function SelectStandard(props) {

  const { name, label, value, onChange, options } = props;

  return (
    <FormControl
      variant = 'standard'
    >
      <InputLabel>{label}</InputLabel>
      <Select
        name = {name}
        label = {label}
        value = {value}
        onChange = {onChange}
      >
        {
          options.map(
            item => (<MenuItem key={item.id} value={item.id}>{item.departmentName}</MenuItem>)
          )
        }
      </Select>
    </FormControl>
  )
}