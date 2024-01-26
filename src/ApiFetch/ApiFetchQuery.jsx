import React from "react";
import styled from 'styled-components';
import { getPosts } from "./api";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  color: #ffffff  ;
  flex-direction: column;  // Corrected typo: 'colum' to 'column'
  align-items: center;  // Corrected typo: 'align-item' to 'align-items'
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;  // Corrected typo: 'list-stle' to 'list-style'
  padding: 0;
  margin: 0;
`;

const ListItem = styled.div`
  background-color: #444444;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
`;

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <p>...Loading data</p>;
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  console.log(data);

  return (
    <Container>
      <Title> List of posts with React Query</Title>
      <List>
        {data.map(({id,title,body}) => (
          <ListItem key={id}>  // Corrected typo: 'Key' to 'key'
            <h3>{title}</h3>
            <p>{body}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;