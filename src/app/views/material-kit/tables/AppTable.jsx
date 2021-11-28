import React from 'react'
import SimpleTable from './SimpleTable'
import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppTable = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Table' },
                    ]}
                />
            </div>
            <SimpleCard title="Simple Table">
                <SimpleTable />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Pagination Table">
                <PaginationTable />
            </SimpleCard>
        </Container>
    )
}

export default AppTable
