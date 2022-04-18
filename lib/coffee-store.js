import { createApi } from 'unsplash-js';

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStore = (lat_long, radius, limit, query) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${lat_long}&radius=${radius}&limit=${limit}`
}

const getListOfCoffeeSTorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'Coffee Shops',
    page: 1,
    perPage: 10,
    // color: 'black_and_white',
    // orientation: 'squarish',
  });

  const unsplashResults = photos.response.results;

  return unsplashResults.map((result) => result.urls['small']);
}

export  const fetchCoffeeStore = async () => {

  const photos = await getListOfCoffeeSTorePhotos()
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `${process.env.FOURSQUARE_AUTHORIZATION}`
    }
  };

  let url = getUrlForCoffeeStore("40.7736,-73.9566", 1000, 6, 'coffee')

  const response = await fetch(url, options)
  
  const data = await response.json()

  return data.results.map((res, idx) => {
    return {
      ...res,
      imgUrl: photos[idx],
    }
  });
};