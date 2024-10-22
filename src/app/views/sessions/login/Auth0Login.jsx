import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "app/components/Typography";
import { FlexAlignCenter } from "app/components/FlexBox";
// GLOBAL CUSTOM HOOKS
import useAuth from "app/hooks/useAuth";

// styled components
const Auth0Root = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh !important"
});

const StyledCard = styled(Card)({
  maxWidth: 800,
  margin: "1rem",
  borderRadius: 12,
  "& .cardHolder": { background: "#1A2038" }
});

export default function Auth0Login() {
  const [message, setMessage] = useState("");
  const { loginWithPopup } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
      navigate("/");
    } catch (e) {
      console.error(e);
      setMessage(e.message);
    }
  };

  return (
    <Auth0Root>
      <StyledCard>
        <Grid container>
          <Grid size={12}>
            <FlexAlignCenter p={4} bgcolor="background.default">
              <img src="/assets/images/illustrations/dreamer.svg" width="400" alt="Login" />
            </FlexAlignCenter>

            <FlexAlignCenter p={4}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleLogin}
                className="socialButton"
                endIcon={<img src="/assets/images/logos/auth0.svg" alt="AuthO" />}>
                Sign In With
              </Button>
            </FlexAlignCenter>

            {message && <Paragraph sx={{ color: "error.main" }}>{message}</Paragraph>}
          </Grid>
        </Grid>
      </StyledCard>
    </Auth0Root>
  );
}
