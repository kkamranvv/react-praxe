import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

function UseEffectCounter() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default UseEffectCounter;
