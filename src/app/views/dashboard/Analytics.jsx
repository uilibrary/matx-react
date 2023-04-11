import { Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';

// import Campaigns from './shared/Campaigns';
// import DoughnutChart from './shared/Doughnut';
// import RowCards from './shared/RowCards';
// import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
// import TopSellingTable from './shared/TopSellingTable';
// import UpgradeCard from './shared/UpgradeCard';

import SimpleCard from 'app/components/SimpleCard';
import AreaChart from '../charts/echarts/AreaChart';
import PaginationTable from '../material-kit/tables/PaginationTable';
import DoughnutChart from '../charts/echarts/Doughnut';


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));
const H1 = styled('h3')(({ textcolor }) => ({
  margin: 0,
  fontWeight: '500',
  marginLeft: '12px',
}));
const Analytics = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>

            <SimpleCard title="When did I Buy?">
              <AreaChart height="350px" color={[theme.palette.primary.main]} />
            </SimpleCard>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <SimpleCard title="My Home">
              <PaginationTable />
            </SimpleCard>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <StatCards2 />
            <H1 textcolor={'#08ad6c'}>Where's My Money</H1>
              <DoughnutChart
                height="350px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light
                ]}
              />

          </Grid>

        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
