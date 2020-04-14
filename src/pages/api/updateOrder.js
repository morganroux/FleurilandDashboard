const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const axios = require("axios");

  export default async (req, res) => {
    if (req.method === 'PUT') {
      const { id, status } = req.query;
      const ret = await axios.put(`https://www.fleuriland.fr/wp-json/wc/v3/orders/${id}?consumer_key=ck_8b723182d48e755debe4ab8a88190376ee40fab7&consumer_secret=cs_c7cfd6fb8fbf6211d88e210519e8e315efc1aa88&status=${status}`, {
        // params: {
        //   // consumer_key: "ck_8b723182d48e755debe4ab8a88190376ee40fab7",
        //   // consumer_secret: "cs_c7cfd6fb8fbf6211d88e210519e8e315efc1aa88",
        //   status: "completed"
        // }
      })
      res.send(ret.data);
    }
  };