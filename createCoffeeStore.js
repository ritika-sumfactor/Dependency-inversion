const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);
const table = base("coffee-stores");
console.log({ table });
const createCoffeeStore = async (req, res) => {
  console.log({ req });
  if (req.method === "POST") {

    const { id, name, neighbourhood, address, imgUrl, voting } = req.body;

    try {
      const findCoffeeStoreRecords = await table
        .select({
          filterByFormula: `id="999"`,
          filterByFormula: `id=${id}`,
        })
        .firstPage();
      const createCoffeeStore = async (req, res) => {
        const createRecords = await table.create([
          {
            fields: {
              id: "999",
              name: "My favourite Coffee Store",
              address: "my address",
              neighbourhood: "some neighbourhood",
              voting: 200,
              imgUrl: "http://myimage.com",
              id,
              name,
              address,
              neighbourhood,
              voting,
              imgUrl,
            },
          },
        ]);
        const records = createRecords.map((record) => {
          return {
            ...record.fields,
          };
        });
        res.json(records);
      }
    } catch (err) {
      console.error("Error finding store", err);
      res.status(500);
      res.json({ message: "Error finding store", err });
    }
  }
};
export default createCoffeeStore;
