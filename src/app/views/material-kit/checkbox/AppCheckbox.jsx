import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleCheckbox from "./SimpleCheckbox";
import LabelledCheckbox from "./LabelledCheckbox";
import FormGroupCheckbox from "./FormGroupCheckbox";
import PlacingCheckboxLabel from "./PlacingCheckboxLabel";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppCheckbox() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Chckbox" }]}
        />
      </Box>

      <SimpleCard title="simple checkbox">
        <SimpleCheckbox />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Checkbox with Label">
        <LabelledCheckbox />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Checkbox with Form Group">
        <FormGroupCheckbox />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Checkbox with Different Label Placement">
        <PlacingCheckboxLabel />
      </SimpleCard>
    </Container>
  );
}
