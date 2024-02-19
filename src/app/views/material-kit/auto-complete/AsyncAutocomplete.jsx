import { useState, useEffect, Fragment } from "react";
import { Autocomplete, CircularProgress, styled, TextField } from "@mui/material";
import axios from "axios";

const AutoComplete = styled(Autocomplete)(() => ({ width: 300 }));

function sleep(delay = 0) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default function AsyncAutocomplete() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) return;

    (async () => {
      // *https://www.registers.service.gov.uk/registers/country/use-the-api*
      const response = await axios.get(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );
      await sleep(3000); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  return (
    <AutoComplete
      open={open}
      options={options}
      loading={loading}
      id="asynchronous-demo"
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      )}
    />
  );
}
