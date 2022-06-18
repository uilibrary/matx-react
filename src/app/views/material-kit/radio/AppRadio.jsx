import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import PlacingRadioLabel from "./PlacingRadioLabel";
import SimpleRadio from "./SimpleRadio";
import StandaloneRadio from "./StandaloneRadio";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppRadio = () => {
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
};

export default AppRadio;
