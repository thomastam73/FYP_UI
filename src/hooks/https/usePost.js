import { useState, useCallback } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const usePost = ({ url, payload }) => {
  const apiUrl = window.siteSetting.dev ? window.siteSetting.testApiUrl : window.siteSetting.apiUrl;
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });
  const { enqueueSnackbar } = useSnackbar();

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    const token = localStorage.getItem('Token');

    axios
      .post(apiUrl + url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
        enqueueSnackbar('Successful', {
          variant: 'success',
        });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error: error.response.data });
        enqueueSnackbar('Error', {
          variant: 'error',
        });
      });
  }, [url, payload]);
  return [res, callAPI];
};

export default usePost;
