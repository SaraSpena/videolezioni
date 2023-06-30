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
        axios.get(`${API_BASE_URL}/users/${userId}`).then((response) => {
          setUser(response.data);
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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-uppercase pt-4">Post Detail</h3>
        </div>
      </div>
      <div className="row border-primary border">
        <div className="col-md-9 col-lg-9 col-sm-12">
          <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
