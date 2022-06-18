import { Button, SnackbarContent, styled } from "@mui/material";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const SnackbarRoot = styled("div")(({ theme }) => ({
  maxWidth: 600,
  "& .snackbar": { margin: theme.spacing(1) },
}));

export default function LongTextSnackbar() {
  return (
    <SnackbarRoot>
      <SnackbarContent className="snackbar" message="I love snacks." action={action} />

      <SnackbarContent
        className="snackbar"
        message={`I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.`}
      />

      <SnackbarContent
        className="snackbar"
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />

      <SnackbarContent
        className="snackbar"
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      />
    </SnackbarRoot>
  );
}
