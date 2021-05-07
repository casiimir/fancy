import { useState, useEffect } from "react";
import axios from "axios";

import SinglePost from "../SinglePost";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts");

    res.then(({ data }) => setPostList(data.filter((post) => post.id === 1)));
  }, []);

  return (
    postList &&
    postList.map(({ ...postData }) => (
      <SinglePost {...postData} key={postData.id} />
    ))
  );
};

export default PostContainer;
