import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box } from '@mui/material';
import { green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material';
import React from 'react';

const GreenRadio = styled(Radio)(() => ({
  color: green[400],
  '&$checked': { color: green[600] }
}));

export default function StandaloneRadio() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <Box>
      <Radio
        value="a"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'a'}
        inputProps={{ 'aria-label': 'A' }}
      />

      <Radio
        value="b"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'b'}
        inputProps={{ 'aria-label': 'B' }}
      />

      <GreenRadio
        value="c"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'c'}
        inputProps={{ 'aria-label': 'C' }}
      />

      <Radio
        value="d"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'd'}
        inputProps={{ 'aria-label': 'D' }}
      />

      <Radio
        value="e"
        color="default"
        onChange={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'e'}
        inputProps={{ 'aria-label': 'E' }}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
      />
    </Box>
  );
}
