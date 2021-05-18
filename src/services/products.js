import axios from "axios";

const productsService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/products",
};

productsService.add = (payload) => {
  console.log("add product is executing", payload);

  const config = {
    method: "POST",
    url: `${productsService.endpoint}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export default productsService;