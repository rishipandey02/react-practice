import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import React from "react";

async function fetechPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  const data = await res.json();
  return data;
}

const QueryExample = () => {
  const [isLoadData, setIsLoadData] = useState(false);
  const {
    data: posts,
    isLoading,
    error,
   
  } = useQuery({ queryKey: ["posts"], queryFn: fetechPosts , enabled: isLoadData,});

  return (
    <div className="section">
      <h2>Intro and setup tanstack</h2>
      <p>This is our first query without Tanstack query</p>

      <button onClick={() => setIsLoadData(true)}>Load Data</button>

      {posts &&
        posts.map((post) => (
          <div key={post.id} className="card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default QueryExample;
