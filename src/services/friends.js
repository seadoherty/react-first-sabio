import axios from "axios";
import usersService from "./users";

const friendsService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends",
  header: { "Content-Type": "application/json" },
};

friendsService.all = () => {
  console.log("get all friends is executing");

  const config = {
    method: "GET",
    url: `${friendsService.endpoint}?pageIndex=0&pageSize=5`,
    crossdomain: true,
    headers: usersService.header,
  };
  return axios(config);
};

friendsService.add = (payload) =>{
    console.log("add friend is executing");

    const config = {
        method: "POST",
        url:`${friendsService.endpoint}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json-patch+json" },
    }
    return axios(config);
}

export default friendsService;