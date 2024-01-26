import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cat"], // Wrap the string in an array
    queryFn: () => Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => res.data),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return  <div>
    <h1>This is the Home Page</h1>
    <p>{data.title}</p>
  </div>
};

export default Home;
