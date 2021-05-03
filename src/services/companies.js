import axios from "axios";

const companiesService = {
  endpoint: "https://api.remotebootcamp.dev/api/techcompanies",
  contentAppJson: { "Content-Type": "application/json" },
};

companiesService.all = (idx, size) => {
  console.log("get all companies is executing");

  const config = {
    method: "GET",
    url: `${companiesService.endpoint}?pageIndex=${idx}&pageSize=${size}`,
    crossdomain: true,
    headers: companiesService.contentAppJson,
  };
  return axios(config);
};

companiesService.add = (payload) => {
  console.log("add company is executing");

  const config = {
    method: "POST",
    url: `${companiesService.endpoint}`,
    data: payload,
    crossdomain: true,
    headers: companiesService.contentAppJson,
  };
  return axios(config);
};

export default companiesService;