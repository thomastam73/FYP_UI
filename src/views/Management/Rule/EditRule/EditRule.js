import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CircularProgress } from '@material-ui/core';
// components
import { DashboardContainer, LoadingButton, DeleteButton } from '../../../../components';
import { RuleInfo } from '../components';
// hooks
import { useFetch, usePut, useDelete } from '../../../../hooks';
// config
import dataModel from '../config/data';

const EditRule = () => {
  const params = useParams();
  const url = `/rules/${params.id}`;
  const { isLoading, data } = useFetch(url);
  const [states, setStates] = React.useState(dataModel);
  const [res, putMethod] = usePut({ url, payload: states });
  const [resDelete, deleteMethod] = useDelete({ url });

  React.useEffect(() => {
    setStates(data);
  }, [data]);

  const handleOnChange = (name) => (e) => {
    setStates({ ...states, [name]: e.target.value });
  };

  return (
    <DashboardContainer title="Edit Rule">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <RuleInfo states={states} handleOnChange={handleOnChange} />
          </Grid>

          <Grid item xs={12}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={putMethod}
              isLoading={res.isLoading}
            >
              Update
            </LoadingButton>{' '}
            <DeleteButton
              variant="outlined"
              color="secondary"
              onClick={deleteMethod}
              isLoading={resDelete.isLoading}
            >
              Delete
            </DeleteButton>
          </Grid>
        </Grid>
      )}
    </DashboardContainer>
  );
};

export default EditRule;
