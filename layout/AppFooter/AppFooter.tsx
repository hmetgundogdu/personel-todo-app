import { Grid } from '@mui/material';

import styles from './app-footer.module.scss';

export default function AppFooter() {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className={styles['app-footer']}
    >
      <Grid item>
        <Grid container alignItems="center" gap={1}>
          <Grid item className={styles['git']}>
            git
          </Grid>
          <Grid className={styles['repository']}>repository</Grid>
        </Grid>
      </Grid>
      <Grid item className={styles['copyright']}>
        &copy; {new Date().getFullYear()} Dilsaz Oktayı
      </Grid>
    </Grid>
  );
}
