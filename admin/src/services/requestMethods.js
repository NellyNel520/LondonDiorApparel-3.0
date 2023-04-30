import axios from "axios";

const BASE_URL = "http://localhost:3001/api/"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I2ZTYwOGUyZDhiYzQ2OGYzZDg3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjgwNjIwOH0.rU_OV3wlMECayHDgGMNi8KIlosQlTIM9BF4h9y55YRM"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(TOKEN)


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});