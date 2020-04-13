const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const axios = require("axios");

  export default async (_req, res) => {
    
   
      const ret = await axios.get("https://www.fleuriland.fr/wp-json/wc/v2/orders", {
        params: {
          consumer_key: "ck_8b723182d48e755debe4ab8a88190376ee40fab7",
          consumer_secret: "cs_c7cfd6fb8fbf6211d88e210519e8e315efc1aa88",
          per_page: 100
        }
      })
      res.send(ret.data);
    
    
  };