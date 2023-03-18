import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function PlacingCheckboxLabel() {
  const [value, setValue] = useState('female');

  const handleChange = (event) => setValue(event.target.value);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>

      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          label="Top"
          labelPlacement="top"
          control={<Checkbox color="primary" />}
        />
        <FormControlLabel
          value="start"
          label="Start"
          labelPlacement="start"
          control={<Checkbox color="primary" />}
        />
        <FormControlLabel
          value="bottom"
          label="Bottom"
          labelPlacement="bottom"
          control={<Checkbox color="primary" />}
        />
        <FormControlLabel
          value="end"
          label="End"
          labelPlacement="end"
          control={<Checkbox color="primary" />}
        />
      </FormGroup>
    </FormControl>
  );
}
