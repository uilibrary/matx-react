import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import AsyncAutocomplete from "./AsyncAutocomplete";
import AutocompleteCombo from "./AutocompleteCombo";
import BadgeAutocomplete from "./BadgeAutocomplete";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppAutoComplete() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Autocomplete" }]}
        />
      </Box>

      <SimpleCard title="autocomplete combo">
        <AutocompleteCombo />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Asyncronous Autocomplete">
        <AsyncAutocomplete />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Asyncronous Autocomplete">
        <BadgeAutocomplete />
      </SimpleCard>
    </Container>
  );
}
