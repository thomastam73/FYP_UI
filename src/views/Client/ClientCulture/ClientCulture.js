import React from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// components
import CultrueCards from './CultureCards';

const ClientInstitution = () => {
  const { data, isLoading } = useFetch('/cultureCards/group');

  const caseCards = data.map((information) => (
    <Grid key={information._id} item xs={12}>
      <Typography variant="h6">{information._id}</Typography>
      <CultrueCards region={information._id} information={information.data} />
    </Grid>
  ));

  return (
    <div>
      <Grid container spacing={3}>
        {/* Booking Step */}
      </Grid>
      {/* Testing Institution */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {isLoading ? (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          ) : (
            caseCards
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientInstitution;
