import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]

const SimpleTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.company}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.date}
                            </TableCell>
                            <TableCell>{subscriber.status}</TableCell>
                            <TableCell>${subscriber.amount}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
