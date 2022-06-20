import axios from 'axios';

const URL_BASE = 'https://api.yelp.com/v3/businesses/';
const auth =
  'fJMk_cZH3zzZu5edhJexc5KmxFkTT51Ec0BC_mjS8BsR0Pr1uf_YQSSpMzaQmk9YMuDZxJBIw0wgCJAkN_WjgxZk_nFFVIfv7a1hjagae0dA9V_TocL20Ngnn8GnYnYx';

export default axios.create({
  baseURL: URL_BASE,
  headers: {
    Authorization: `Bearer ${auth}`,
  },
});
