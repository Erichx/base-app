import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_API}/api`,
});

export default api; 