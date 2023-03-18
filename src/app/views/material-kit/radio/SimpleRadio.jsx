import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material';
import React from 'react';

const RadioRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  '& .formControl': {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  '& .group': { margin: theme.spacing(1, 0) }
}));

export default function SimpleRadio() {
  const [value, setValue] = React.useState('female');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <RadioRoot>
      <FormControl component="fieldset" className="formControl">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          value={value}
          name="gender1"
          className="group"
          aria-label="Gender"
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </RadioRoot>
  );
}
