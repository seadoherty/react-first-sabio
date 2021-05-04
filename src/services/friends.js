import axios from "axios";


const friendsService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends",
  header: { "Content-Type": "application/json" },
};

friendsService.all = (idx,size) => {
  console.log("get all friends is executing");

  const config = {
    method: "GET",
    url: `${friendsService.endpoint}?pageIndex=${idx}&pageSize=${size}`,
    crossdomain: true,
    headers: friendsService.header,
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
        headers: friendsService.header,
    }
    return axios(config);
}

friendsService.update = (payload,id) =>{
  console.log("update friend is executing",payload);

  const config = {
      method: "PUT",
      url:`${friendsService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: friendsService.header,
  }
  return axios(config);
}
friendsService.remove = (id) =>{
  console.log(`remove friend is executing, removing ${id}`);

  const config = {
      method: "DELETE",
      url:`${friendsService.endpoint}/${id}`,
      crossdomain: true,
      headers: friendsService.header,
  }
  return axios(config);
}

friendsService.search=(query)=>{
  console.log("search friends is executing");

  const config={
    method:"GET",
    url: `${friendsService.endpoint}/search?pageIndex=0&pageSize=25&q=${query}`,
    crossdomain: true,
    headers: friendsService.header,
  }
  return axios(config)

}

export default friendsService;