const getUrlForCoffeeStore = (lat_long, radius, limit, query) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${lat_long}&radius=${radius}&limit=${limit}`
}

export  const fetchCoffeeStore = async () => {
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

  return data.results;
};