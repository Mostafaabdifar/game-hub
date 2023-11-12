import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aa90f819594943c8a764efd5b7eacafc",
  },
});
