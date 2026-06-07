import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function PostList() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
      );
      const data = res.json();
      return data;
    },
    staleTime: 1000 * 10,
    gcTime: 1000 * 10,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p></p>}
      {data &&
        data.map((post) => (
          <div key={post.id} className="card">
            <p>{post.title}</p>
          </div>
        ))}
    </div>
  );
}

const CashingExample = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="section">
      <h2>Cashing Example</h2>
      <p>
        Toggle this component off and on to show that Tanstack Query keeps data
        in cache
      </p>

      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <PostList />}
    </div>
  );
};

export default CashingExample;
