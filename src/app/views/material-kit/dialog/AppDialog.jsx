import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import ConfirmationDialog from './ConfirmationDialog';
import CustomizedDialogs from './CustomizedDialog';
import AlertDialogSlide from './DialogTransition';
import FormDialog from './FormDialog';
import FullScreenDialog from './FullScreenDialog';
import MaxWidthDialog from './OptimalSizeDialog';
import ResponsiveDialog from './ResponsiveDialog';
import AlertDialog from './SimpleAlerts';
import SimpleDialogDemo from './SimpleDialog';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppDialog = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Dialog' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="simple Dialog">
          <SimpleDialogDemo />
        </SimpleCard>

        <SimpleCard title="alert dialog">
          <AlertDialog />
        </SimpleCard>

        <SimpleCard title="transition">
          <AlertDialogSlide />
        </SimpleCard>

        <SimpleCard title="form dialog">
          <FormDialog />
        </SimpleCard>

        <SimpleCard title="customized dialog">
          <CustomizedDialogs />
        </SimpleCard>

        <SimpleCard title="full-screen dialog">
          <FullScreenDialog />
        </SimpleCard>

        <SimpleCard title="optimized size dialog">
          <MaxWidthDialog />
        </SimpleCard>

        <SimpleCard title="responsive dialog">
          <ResponsiveDialog />
        </SimpleCard>

        <SimpleCard title="confirmation dialog">
          <ConfirmationDialog />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppDialog;
