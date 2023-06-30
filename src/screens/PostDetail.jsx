import axios from "axios";
import { React, useEffect, useState } from "react";
import { API_BASE_URL } from "../config/constant";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const { postId, userId } = useParams();
  const getPostAndUser = () => {
    axios
      .get(`${API_BASE_URL}/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        axios.get(`${API_BASE_URL}/users/${userId}`)
        .then((response) => {
          setUser(response.data);
          debugger
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPostAndUser();
  }, []);
  return (
    <div>
      PostDetail post-{postId} , user-{userId}{" "}
    </div>
  );
}
