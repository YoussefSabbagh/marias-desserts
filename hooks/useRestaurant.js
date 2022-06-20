import { useState } from 'react';
import yelp from '../apis/yelpFinderAxios';

export default () => {
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: false,
  });

  const searchRestaurant = async (searchParams) => {
    setResult({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await yelp.get(
        `search?location=${searchParams.location}&term=${searchParams.term}&limit=${searchParams.limit}`
      );
      setResult({
        data: response.data.businesses,
        error: null,
        loading: false,
      });
    } catch (error) {
      setResult({
        data: null,
        error: 'Something went wrong',
        loading: false,
      });
    }
  };
  return [result, searchRestaurant];
};
