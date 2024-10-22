import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
const StyledLoading = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": { width: "auto", height: "25px" },
  "& .circleProgress": {
    left: -7,
    right: 0,
    position: "absolute",
    top: "calc(50% - 25px)"
  }
});

export default function Loading() {
  return (
    <StyledLoading>
      <Box position="relative">
        <img src="/assets/images/logo-circle.svg" alt="Logo" />
        <CircularProgress className="circleProgress" />
      </Box>
    </StyledLoading>
  );
}
