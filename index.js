import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home(props) {

  console.log({ latLong, locationErrorMsg });

  useEffect(() => {
    async function setCoffeeStoresByLocation() {
      if (latLong) {
        try {
          const fetchedCoffeeStores = await fetchCoffeeStores(latLong, 6);
          console.log({ fetchedCoffeeStores });
          //set coffee stores
        } catch (error) {
          //set error
          console.log("Error", { error });
        }
      }
    }
    setCoffeeStoresByLocation();
  }, [latLong]);

  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
    handleTrackLocation();