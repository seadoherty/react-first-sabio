import axios from "axios";

const jobsService = {
  endpoint: "https://api.remotebootcamp.dev/api/jobs",
  header: { "Content-Type": "application/json" },
};

jobsService.all = (idx, size) => {
  console.log("get all jobs is executing");

  const config = {
    method: "GET",
    url: `${jobsService.endpoint}?pageIndex=${idx}&pageSize=${size}`,
    crossdomain: true,
    headers: jobsService.header,
  };
  return axios(config);
};

jobsService.add = (payload) => {
  console.log("add job is executing");

  const config = {
    method: "POST",
    url: `${jobsService.endpoint}`,
    data: payload,
    crossdomain: true,
    headers: jobsService.header,
  };
  return axios(config);
};

export default jobsService;