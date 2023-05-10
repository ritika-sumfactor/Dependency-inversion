import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    paths,
    fallback: true,
  };
}
const CoffeeStore = (props) => {
    return <div>Loading...</div>;
  }

  const { address, name, neighbourhood } = props.coffeeStore;

  console.log("props", props);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};