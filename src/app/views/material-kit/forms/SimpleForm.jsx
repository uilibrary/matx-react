import { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Icon from "@mui/material/Icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { Span } from "app/components/Typography";

const SimpleForm = () => {
  const [state, setState] = useState({
    email: "",
    mobile: "",
    gender: "",
    username: "",
    password: "",
    firstName: "",
    creditCard: "",
    confirmPassword: ""
  });

  const handleSubmit = (event) => {
    console.log("submitted");
    console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { username, firstName, creditCard, mobile, password, confirmPassword, gender, email } =
    state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={6}>
          <Grid size={{ md: 6, xs: 12 }} sx={{ mt: 2 }}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                label="Username"
              />

              <TextField
                fullWidth
                type="text"
                name="firstName"
                label="First Name"
                onChange={handleChange}
                value={firstName}
              />

              <TextField
                fullWidth
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
              />

              <TextField
                sx={{ mb: 4 }}
                fullWidth
                type="number"
                name="creditCard"
                label="Credit Card"
                onChange={handleChange}
                value={creditCard}
              />
            </Stack>
          </Grid>

          <Grid size={{ md: 6, xs: 12 }} sx={{ mt: 2 }}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                type="text"
                name="mobile"
                value={mobile}
                label="Mobile Nubmer"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="password"
                type="password"
                label="Password"
                value={password}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                label="Confirm Password"
                value={confirmPassword}
              />

              <RadioGroup row name="gender" value={gender} onChange={handleChange}>
                <FormControlLabel
                  value="Male"
                  label="Male"
                  labelPlacement="end"
                  control={<Radio color="secondary" />}
                />

                <FormControlLabel
                  value="Female"
                  label="Female"
                  labelPlacement="end"
                  control={<Radio color="secondary" />}
                />

                <FormControlLabel
                  value="Others"
                  label="Others"
                  labelPlacement="end"
                  control={<Radio color="secondary" />}
                />
              </RadioGroup>

              <FormControlLabel
                control={<Checkbox />}
                label="I have read and agree to the terms of service."
              />
            </Stack>
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </form>
    </div>
  );
};

export default SimpleForm;
