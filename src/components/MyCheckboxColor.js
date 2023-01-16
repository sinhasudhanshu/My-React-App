import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MyCheckboxColor() {

    return (

        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked color="default" />
            <Checkbox
                {...label}
                defaultChecked
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />

        </div>
    );
}

export default MyCheckboxColor;
