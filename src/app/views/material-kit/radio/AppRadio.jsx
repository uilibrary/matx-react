import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleRadio from "./SimpleRadio";
import StandaloneRadio from "./StandaloneRadio";
import PlacingRadioLabel from "./PlacingRadioLabel";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppRadio() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Radio" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Simple Radio Button">
          <SimpleRadio />
        </SimpleCard>

        <SimpleCard title="Standalone Radio Button">
          <StandaloneRadio />
        </SimpleCard>

        <SimpleCard title="Label Placement">
          <PlacingRadioLabel />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
