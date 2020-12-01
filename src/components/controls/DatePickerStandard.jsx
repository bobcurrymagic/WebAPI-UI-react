import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePickerStandard(props) {

    const { name, label, value, onChange } = props;

    const convertToDefaultEventParameters = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant = 'inline'
                inputVariant = 'outlined'
                KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                label = {label}
                format = 'MM/dd/yyyy'
                name = {name}
                value = {value}
                onChange = {date =>onChange(convertToDefaultEventParameters(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}
