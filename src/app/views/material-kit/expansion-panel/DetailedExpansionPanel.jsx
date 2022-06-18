import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Chip, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const AccordionRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  "& .heading": { fontSize: theme.typography.pxToRem(15) },
  "& .secondaryHeading": {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(15),
  },
  "& .icon": {
    width: 20,
    height: 20,
    verticalAlign: "bottom",
  },
  "& .details": { alignItems: "center" },
  "& .column": { flexBasis: "33.33%" },
  "& .helper": {
    padding: theme.spacing(1, 2),
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
  "& .link": {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": { textDecoration: "underline" },
  },
}));

export default function DetailedExpansionPanel() {
  return (
    <AccordionRoot>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <Box className="column">
            <Typography className="heading">Location</Typography>
          </Box>

          <Box className="column">
            <Typography className="secondaryHeading">Select trip destination</Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails className="details">
          <Box className="column" />
          <Box className="column">
            <Chip label="Barbados" onDelete={() => {}} />
          </Box>

          <Box className="column helper">
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" className="link">
                Learn more
              </a>
            </Typography>
          </Box>
        </AccordionDetails>

        <Divider />

        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </AccordionRoot>
  );
}
