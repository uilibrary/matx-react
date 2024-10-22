import styled from "@mui/material/styles/styled";

const DividerRoot = styled("div")(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  height: 16,
  "&::after": {
    left: 0,
    zIndex: 1,
    top: "10px",
    content: '""',
    width: "100%",
    height: "1px",
    position: "absolute",
    backgroundColor: theme.palette.divider
  },
  "& span": {
    zIndex: 5,
    background: "#fff",
    padding: "4px 6px",
    position: "relative",
    color: theme.palette.text.secondary
  }
}));

export default function MatxDivider({ text, sx }) {
  return (
    <div>
      <DividerRoot sx={sx}>{text && <span>{text}</span>}</DividerRoot>
    </div>
  );
}
