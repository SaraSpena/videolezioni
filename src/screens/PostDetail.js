import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/constant";
import "./PostDetail.css";
function PostDetail() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();

  const { postId, userId } = useParams();

  const getPostAndUser = () => {
    axios
      .get(`${API_BASE_URL}/posts/${postId}`)
      .then((postRes) => {
        const { title, body } = postRes.data;
        setTitle(title);
        setBody(body);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${API_BASE_URL}/users/${userId}`)
      .then((userRes) => {
        const { name, phone, email, website } = userRes.data;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setWebsite(website);
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
      <div className="row">
        <div className="col-md-9 col-lg-9 col-sm-12">
          <div className="card mb-3">
            <img
              src="https://agenparl.eu/wp-content/uploads/2023/06/Peggy-Gou.jpg"
              className="card-img-top card-img-height"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
          <div class="card">
            <img
              src="https://www.rollingstone.it/wp-content/uploads/2018/07/CREDIT-JUNGWOOK-MOK-pf9765_K1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">User information</h5>
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li className="list-group-item">
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className="list-group-item">
                <a target="_blank" href={`www.${website}`}>
                  {website}
                </a>
              </li>
              <li className="list-group-item">
                <div className="d-block">
                  <button
                    onClick={() => navigate(-1)}
                    className="btn btn-primary w-100 text-uppercase"
                  >
                    {" "}
                    back
                  </button>
                </div>
              </li>
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

export default PostDetail;
