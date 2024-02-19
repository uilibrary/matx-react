import { Box, Button, Fab, Icon, IconButton, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";

// STYLED COMPONENTS
const AppButtonRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  },
  "& .button": { margin: theme.spacing(1) },
  "& .input": { display: "none" }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}));

export default function AppButton() {
  return (
    <AppButtonRoot>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Buttons" }]}
        />
      </Box>

      <SimpleCard title="contained buttons">
        <StyledButton variant="contained" color="inherit">
          Default
        </StyledButton>

        <StyledButton variant="contained" color="primary">
          Primary
        </StyledButton>

        <StyledButton variant="contained" color="secondary">
          Secondary
        </StyledButton>

        <StyledButton variant="contained" color="secondary" disabled>
          Disabled
        </StyledButton>

        <StyledButton variant="contained" href="#contained-buttons">
          Link
        </StyledButton>

        <input accept="image/*" className="input" id="contained-button-file" multiple type="file" />
        <label htmlFor="contained-button-file">
          <StyledButton variant="contained" component="span">
            Upload
          </StyledButton>
        </label>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="text buttons">
        <StyledButton>Default</StyledButton>
        <StyledButton color="primary">Primary</StyledButton>
        <StyledButton color="secondary">Secondary</StyledButton>
        <StyledButton disabled>Disabled</StyledButton>
        <StyledButton href="#text-buttons">Link</StyledButton>

        <input accept="image/*" className="input" id="text-button-file" multiple type="file" />
        <label htmlFor="text-button-file">
          <StyledButton component="span">Upload</StyledButton>
        </label>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="outlined buttons">
        <StyledButton variant="outlined">Default</StyledButton>
        <StyledButton variant="outlined" color="primary">
          Primary
        </StyledButton>

        <StyledButton variant="outlined" color="secondary">
          Secondary
        </StyledButton>

        <StyledButton variant="outlined" disabled>
          Disabled
        </StyledButton>

        <StyledButton variant="outlined" href="#outlined-buttons">
          Link
        </StyledButton>

        <input accept="image/*" className="input" id="outlined-button-file" multiple type="file" />
        <label htmlFor="outlined-button-file">
          <StyledButton variant="outlined" component="span">
            Upload
          </StyledButton>
        </label>

        <StyledButton variant="outlined" color="inherit">
          Inherit
        </StyledButton>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="icon buttons">
        <IconButton className="button" aria-label="Delete">
          <Icon>delete</Icon>
        </IconButton>

        <IconButton className="button" aria-label="Delete" disabled color="primary">
          <Icon>delete</Icon>
        </IconButton>

        <IconButton color="secondary" className="button" aria-label="Add an alarm">
          <Icon>alarm</Icon>
        </IconButton>

        <IconButton color="primary" className="button" aria-label="Add to shopping cart">
          <Icon>add_shopping_cart</Icon>
        </IconButton>

        <input accept="image/*" className="input" id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            component="span"
            className="button"
            aria-label="Upload picture">
            <Icon>photo_camera</Icon>
          </IconButton>
        </label>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="different size buttons">
        <Fab size="small" color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab size="medium" color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab color="secondary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="outlined buttons">
        <Fab color="primary" aria-label="Add" className="button">
          <Icon>add</Icon>
        </Fab>

        <Fab color="secondary" aria-label="Edit" className="button">
          <Icon>edit_icon</Icon>
        </Fab>

        <Fab variant="extended" aria-label="Delete" className="button">
          <Icon sx={{ mr: 4 }}>navigation</Icon>
          Extended
        </Fab>

        <Fab disabled aria-label="Delete" className="button">
          <Icon>delete</Icon>
        </Fab>
      </SimpleCard>
    </AppButtonRoot>
  );
}
