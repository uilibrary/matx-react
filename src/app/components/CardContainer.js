import { Box, styled } from "@mui/system";
import { themeShadows } from "../theme/themeColors";

export const CardContainer = styled(Box)(() => ({
  borderRadius: 10,
  overflow: "hidden",
  padding: "1.4rem 1.25rem",
  boxShadow: themeShadows[1],
}));
