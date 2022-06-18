import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ConsecutiveSnackbar from "./ConsecutiveSnackbar";
import CustomizedSnackbars from "./CustomizedSnackbar";
import DirectionSnackbar from "./DirectionSnackbar";
import LongTextSnackbar from "./LongLengthSnackbar";
import PositionedSnackbar from "./PositionedSnackbar";
import SimpleSnackbar from "./SimpleSnackbar";
import IntegrationNotistack from "./StackedSnackbar";
import TransitionsSnackbar from "./TransitionSnackbar";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppSnackbar = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Snackbar" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="simple snackbar">
          <SimpleSnackbar />
        </SimpleCard>

        <SimpleCard title="customized snackbar">
          <CustomizedSnackbars />
        </SimpleCard>

        <SimpleCard title="positioned snackbar">
          <PositionedSnackbar />
        </SimpleCard>

        <SimpleCard title="message length">
          <LongTextSnackbar />
        </SimpleCard>

        <SimpleCard title="transition">
          <TransitionsSnackbar />
        </SimpleCard>

        <SimpleCard title="consecutive snackbar">
          <ConsecutiveSnackbar />
        </SimpleCard>

        <SimpleCard title="Control Slide direction">
          <DirectionSnackbar />
        </SimpleCard>

        <SimpleCard title="complementary project">
          <IntegrationNotistack />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppSnackbar;
