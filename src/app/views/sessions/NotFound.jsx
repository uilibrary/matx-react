import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// STYLED COMPONENTS
const StyledImage = styled("img")({
  width: "100%",
  marginBottom: "32px"
});

const NotFoundRoot = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh !important",
  "& .content": {
    maxWidth: 320,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <div className="content">
        <StyledImage src="/assets/images/illustrations/404.svg" alt="404-Not Found" />

        <Button color="primary" variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </NotFoundRoot>
  );
}
