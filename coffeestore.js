const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  unsplashApi.search.getPhotos({
    query: "cat",
    page: 1,
    perPage: 10,
    color: "green",
    orientation: "portrait",
const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 30,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();
  const options = {
    method: "GET",
    headers: {
export const fetchCoffeeStores = async () => {
    options
  );
  const data = await response.json();
  return data.results;
  return data.results.map((result, idx) => {
    return {
      ...result,
      imgUrl: photos[idx],
    };
  });
};
