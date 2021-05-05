import { useState, useEffect } from "react";
import axios from "axios";

import SinglePost from "../SinglePost";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts");

    res.then(({ data }) => {
      console.log(postList);
      setPostList(data.filter((post) => post.id === 1));
    });
  }, []);

  return (
    postList &&
    postList.map(({ id, ...postData }) => <SinglePost {...postData} key={id} />)
  );
};

export default PostContainer;
