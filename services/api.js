import axios from 'axios';

async function fetchData(url) {
  const { data } = await axios(url);
  return data;
}

export { fetchData };
