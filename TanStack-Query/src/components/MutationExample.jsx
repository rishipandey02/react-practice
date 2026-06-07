import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";

async function createPost(newPost) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = res.json();
  return data;
}

const MutationExample = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { mutate , data:newPost,isPending,isError,error} = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log("Post Created:", data);
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });

  return (
    <div className="section">
      <h1>Mutation Example</h1>
      <p>Mutation Are used to create,update, or delete data</p>

      <input
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post Description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        onClick={() => {
          mutate({ title, body, userId: 1 });
        }}
      >
        Create Post
      </button>

      {isPending && <p>Creating Post ...</p>}
      {isError && <p>Something went wrong: {error.message}</p>}
      {newPost && (
        <div className="card">
            <h4>{newPost.title}</h4>
            <p>{newPost.body}</p>
        </div>
      )}
    </div>
  );
};

export default MutationExample;
