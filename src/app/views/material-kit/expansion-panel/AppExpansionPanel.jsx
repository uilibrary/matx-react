import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ControlledExpansionPanels from "./ControlledAccordion";
import CustomizedExpansionPanels from "./CustomizedExpansionPanel";
import DetailedExpansionPanel from "./DetailedExpansionPanel";
import SimpleExpansionPanel from "./SimpleExpansionPanel";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppExpansionPanel = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Expansion Panel" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="simple expansion panel">
          <SimpleExpansionPanel />
        </SimpleCard>

        <SimpleCard title="Controlled Accordion">
          <ControlledExpansionPanels />
        </SimpleCard>

        <SimpleCard title="Secondary heading and Columns">
          <DetailedExpansionPanel />
        </SimpleCard>

        <SimpleCard title="Customized expansion panels">
          <CustomizedExpansionPanels />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppExpansionPanel;
