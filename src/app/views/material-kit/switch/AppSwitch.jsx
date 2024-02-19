import { Box, styled, Stack } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleSwitch from "./SijmpleSwitch";
import LabelledSwitch from "./LabelledSwitch";
import FormGroupSwitch from "./FormGroupSwitch";
import CustomizedSwitch from "./CustomizedSwitch";
import PlacingSwitchLabel from "./PlacingSwitchLabel";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppSwitch() {
  return (
    <Container>
      <Box className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Switch" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Simple Switch">
          <SimpleSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Label">
          <LabelledSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Form Group">
          <FormGroupSwitch />
        </SimpleCard>

        <SimpleCard title="Customized Switch">
          <CustomizedSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Different Label Placement">
          <PlacingSwitchLabel />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
