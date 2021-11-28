import React from 'react'
import { styled } from '@mui/system'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import { Chip, Button, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionActions from '@mui/material/AccordionActions'

const AccordionRoot = styled('div')(({ theme }) => ({
    width: '100%',
    '& .heading': {
        fontSize: theme.typography.pxToRem(15),
    },
    '& .secondaryHeading': {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    '& .details': {
        alignItems: 'center',
    },
    '& .column': {
        flexBasis: '33.33%',
    },
    '& .helper': {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    '& .link': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}))

export default function DetailedExpansionPanel() {
    return (
        <AccordionRoot>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className="column">
                        <Typography className="heading">Location</Typography>
                    </div>
                    <div className="column">
                        <Typography className="secondaryHeading">
                            Select trip destination
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className="details">
                    <div className="column" />
                    <div className="column">
                        <Chip label="Barbados" onDelete={() => { }} />
                    </div>
                    <div className="column helper">
                        <Typography variant="caption">
                            Select your destination of choice
                            <br />
                            <a href="#sub-labels-and-columns" className="link">
                                Learn more
                            </a>
                        </Typography>
                    </div>
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
    )
}
