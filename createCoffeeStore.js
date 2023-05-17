const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);
const table = base("coffee-stores");
console.log({ table });
const createCoffeeStore = async (req, res) => {
  console.log({ req });
  if (req.method === "POST") {
    //find a record
    try {
      const findCoffeeStoreRecords = await table
        .select({
          filterByFormula: `id="59f784dd28122f14f9d5d63d"`,
          filterByFormula: `id="999"`,
        })
        .firstPage();
      const createCoffeeStore = async (req, res) => {
        res.json(records);
      } else {
        //create a record
        res.json({ message: "create a record" });
        const createRecords = await table.create([
          {
            fields: {
              id: "999",
              name: "My favourite Coffee Store",
              address: "my address",
              neighbourhood: "some neighbourhood",
              voting: 200,
              imgUrl: "http://myimage.com",
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
