import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getListOfCoffeeStorePhotos = async () => {
    query: "coffee shop",
    perPage: 30,
  });
  const unsplashResults = photos.response.results;
  const unsplashResults = photos.response?.results || [];
  return unsplashResults.map((result) => result.urls["small"]){;
};

export const fetchCoffeeStores = async () => {
export const fetchCoffeeStores = async (
  latLong = "43.653833032607096%2C-79.37896808855945",
  limit = 6
) => {
  const photos = await getListOfCoffeeStorePhotos();
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(
      "43.653833032607096%2C-79.37896808855945",
      "coffee",
      6
    ),
    getUrlForCoffeeStores(latLong, "coffee", limit),
    options
  );
  const data = await response.json();
export const fetchCoffeeStores = async () => {
      address: result.location.address,
      name: result.name,
      neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
      imgUrl: photos[idx],
      imgUrl: photos.length > 0 ? photos[idx] : null,
    };
  });
};