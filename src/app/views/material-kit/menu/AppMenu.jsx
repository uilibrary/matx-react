import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleMenu from "./SimpleMenu";
import SelectedMenu from "./SelectedMenu";
import MaxHeightMenu from "./MaxHeightMenu";
import CustomizedMenu from "./CustomizedMenu";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

export default function AppMenu() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Menu" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="simple menu">
          <SimpleMenu />
        </SimpleCard>

        <SimpleCard title="selected menu">
          <SelectedMenu />
        </SimpleCard>

        <SimpleCard title="customized menu">
          <CustomizedMenu />
        </SimpleCard>

        <SimpleCard title="max height menu">
          <MaxHeightMenu />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
