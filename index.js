export async function getStaticProps(context) {
  console.log("hi getStaticProps");

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "<add your foursquare token here>",
    },
  };

  fetch(
    "https://api.foursquare.com/v3/places/search?query=coffee&ll=43.653833032607096%2C-79.37896808855945&limit=6",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return {
    props: {
      coffeeStores: coffeeStoresData,
