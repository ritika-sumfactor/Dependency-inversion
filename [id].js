import cls from "classnames";

import coffeeStoresData from "../../data/coffee-stores.json";

import styles from "../../styles/coffee-store.module.css";

import { fetchCoffeeStores } from "../../lib/coffee-stores";
@@ -19,7 +17,7 @@ export async function getStaticProps(staticProps) {
  return {
    props: {
      coffeeStore: coffeeStores.find((coffeeStore) => {
        return coffeeStore.fsq_id.toString() === params.id; //dynamic id
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
@@ -30,7 +28,7 @@ export async function getStaticPaths() {
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
        id: coffeeStore.id.toString(),
      },
    };
  });
