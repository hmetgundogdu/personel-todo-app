import { ReactNode } from 'react';
import { Grid, Divider } from '@mui/material';
import AppHeader from '../AppHeader/AppHeader';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Grid container rowSpacing={1} justifyContent="center">
      <Grid item xs={11} sm={9} md={8} lg={7}>
        <AppHeader />
      </Grid>
      <Grid item xs={11} sm={9} md={8} lg={7}>
        <Divider />
      </Grid>
      <Grid item xs={11} sm={9} md={8} lg={7}>
        {children}
      </Grid>
    </Grid>
  );
}
