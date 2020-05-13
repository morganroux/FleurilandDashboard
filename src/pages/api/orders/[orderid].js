const axios = require("axios");

export default async (req, res) => {
    const {query: { orderid }} = req;

    const ret = await axios.get(`https://www.fleuriland.fr/wp-json/wc/v3/orders/${orderid}`, {
        params: {
          consumer_key: "ck_8b723182d48e755debe4ab8a88190376ee40fab7",
          consumer_secret: "cs_c7cfd6fb8fbf6211d88e210519e8e315efc1aa88"
        }
      })
      res.send(ret.data);
  }