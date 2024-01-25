import axios from "axios";

export function getPosts() {
  return axios
    .get("http://localhost:3000/posts", { param: { _sort: "title" } })
    .then((res) => res.data);
}
