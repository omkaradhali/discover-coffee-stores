import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStore = (lat_long, radius, limit, query) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${lat_long}&radius=${radius}&limit=${limit}`;
};

const getListOfCoffeeSTorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "Coffee Shops",
    page: 1,
    perPage: 35,
    // color: 'black_and_white',
    // orientation: 'squarish',
  });

  const unsplashResults = photos.response.results;

  return unsplashResults.map((result) => result.urls["small"]);
};

// 40.7708352, -73.9496108
// 40.7736,-73.9566

export const fetchCoffeeStore = async (
  latLong = "40.7736,-73.9566",
  limit = 6
) => {
  const photos = await getListOfCoffeeSTorePhotos();
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_FOURSQUARE_AUTHORIZATION}`,
    },
  };

  let url = getUrlForCoffeeStore(latLong, 1000, limit, "coffee");

  const response = await fetch(url, options);

  const data = await response.json();

  return data.results.map((res, idx) => {
    return {
      ...res,
      imgUrl: photos[idx],
    };
  });
};
