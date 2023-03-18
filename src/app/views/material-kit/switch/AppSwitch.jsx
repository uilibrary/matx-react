import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import CustomizedSwitch from './CustomizedSwitch';
import FormGroupSwitch from './FormGroupSwitch';
import LabelledSwitch from './LabelledSwitch';
import PlacingSwitchLabel from './PlacingSwitchLabel';
import SimpleSwitch from './SijmpleSwitch';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppSwitch = () => {
  return (
    <Container>
      <Box className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Switch' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Simple Switch">
          <SimpleSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Label">
          <LabelledSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Form Group">
          <FormGroupSwitch />
        </SimpleCard>

        <SimpleCard title="Customized Switch">
          <CustomizedSwitch />
        </SimpleCard>

        <SimpleCard title="Switch with Different Label Placement">
          <PlacingSwitchLabel />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppSwitch;
