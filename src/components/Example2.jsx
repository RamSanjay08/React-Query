import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

const Example2 = () => {
  const queryClient = useQueryClient();

  //^useQuery
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <div>
      {postQuery.data.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
};

function wait(duaration) {
  return new Promise((resolve) => setTimeout(resolve, duaration));
}

export default Example2;
