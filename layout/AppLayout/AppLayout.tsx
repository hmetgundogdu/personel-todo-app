import { Grid, Divider } from '@mui/material';
import { ReactNode } from 'react';
import AppHeader from '../AppHeader/AppHeader';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Grid container rowSpacing={1} justifyContent="center">
      <Grid item xs={11} sm={9} md={8} lg={7} xl={6}>
        <AppHeader />
      </Grid>
      <Grid item xs={11} sm={9} md={8} lg={7} xl={6}>
        <Divider />
      </Grid>
      <Grid item xs={11} sm={9} md={8} lg={7} xl={6}>
        {children}
      </Grid>
    </Grid>
  );
}
