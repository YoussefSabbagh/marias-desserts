const URL_BASE = 'https://api.yelp.com/v3/businesses/search';
export const yelpFinder = {};

yelpFinder.byCategory = async (searchParams) => {
  const auth =
    'fJMk_cZH3zzZu5edhJexc5KmxFkTT51Ec0BC_mjS8BsR0Pr1uf_YQSSpMzaQmk9YMuDZxJBIw0wgCJAkN_WjgxZk_nFFVIfv7a1hjagae0dA9V_TocL20Ngnn8GnYnYx';

  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?location=${searchParams.location}&limit=5&term=${searchParams.term}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth}`,
      },
    }
  );
  return await response.json();
};
