import { Grid, LinearProgress, Typography, styled, useTheme } from "@mui/material";
import { Small } from "./Typography";

// STYLED COMPONENT
const CustomLinearProgress = styled(LinearProgress)({
  borderRadius: 2,
  background: "rgba(0, 0, 0, 0.1)"
});

export default function MatxProgressBar({
  text = "",
  value = 75,
  spacing = 2,
  color = "primary",
  coloredText = false
}) {
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;

  return (
    <Grid container spacing={spacing} alignItems="center">
      <Grid item xs={text ? 8 : 12}>
        <CustomLinearProgress color={color} value={value} variant="determinate" />
      </Grid>

      {text !== "" && (
        <Grid item xs={text ? 4 : false}>
          <Typography color={color}>
            <Small sx={{ color: coloredText ? "" : secondary }}>{text}</Small>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
