// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,  // don't refetch when switching tabs
    keepPreviousData: true,       // keep old data during refetch
    staleTime: 1000 * 60 * 1,     // 1 minute -> data considered fresh
    cacheTime: 1000 * 60 * 5,     // 5 minutes -> unused data stays in cache
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      {isFetching && <p className="text-sm text-gray-500">Updating...</p>}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
