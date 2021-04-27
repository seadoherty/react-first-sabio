import axios from "axios";

const usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
  header:{ "Content-Type": "application/json" }
};

usersService.current = () => {
  console.log("get current user is executing");

  const config = {
    method: "GET",
    url: `${usersService.endpoint}/current`,
    crossdomain: true,
    headers: usersService.header,
  };
  return axios(config);
};

usersService.login = (payload) => {
  console.log("user login is executing", payload);

  const config = {
    method: "POST",
    url: `${usersService.endpoint}/login`,
    data: payload,
    crossdomain: true,
    headers: usersService.header,
  };
  return axios(config);
};

usersService.logout = () => {

  const config = {
    method: "GET",
    url: `${usersService.endpoint}/logout`,
    crossdomain: true,
    headers: usersService.header,
  };

  return axios(config);
};

usersService.register = (payload) =>{
  console.log("register is executing",payload);

  const config={
    method: "POST",
    url:`${usersService.endpoint}/register`,
    data: payload,
    crossdomain: true,
    headers: usersService.header,
  };

  return axios(config);
}


export default usersService;
