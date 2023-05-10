export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params", params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === 0; //dynamic id
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
export async function getStaticProps(staticProps) {
export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: false,
  };
}

const CoffeeStore = () => {
const CoffeeStore = (props) => {
  const router = useRouter();
  console.log("router", router);

  console.log("props", props);
  return (
    <div>
      Coffee Store Page {router.query.id}
const CoffeeStore = () => {
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  );
};