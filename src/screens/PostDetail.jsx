import axios from "axios";
import { React, useEffect, useState } from "react";
import { API_BASE_URL } from "../config/constant";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {
  const navigate=useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const { postId, userId } = useParams();
  const getPostAndUser = () => {
    axios
      .get(`${API_BASE_URL}/posts/${postId}`)
      .then((postRes) => {
        const { title, body } = postRes.data;
        setTitle(title);
        setBody(body);
        axios.get(`${API_BASE_URL}/users/${userId}`).then((userRes) => {
          const { name, email, phone, website } = userRes.data;
          setName(name);
          setEmail(email);
          setPhone(phone);
          setWebsite(website);
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
            <img
              src="https://anime.atsit.in/it/wp-content/uploads/2022/12/ci-sara-una-seconda-stagione-di-bocchi-the-rock-tutto-cio-che-sappiamo-finora.webp"
              className="card-img-top"
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
          <div className="card">
            <img
              src="https://assets-prd.ignimgs.com/2022/12/29/bocchi-hero-1672352739701.jpg?width=1920"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`mailto:${email}`}> {email}</a>
              </li>
              <li className="list-group-item">
                <a href={`tel:${phone}`}> {phone}</a>
              </li>
              <li className="list-group-item">
                <a href={`www.${website}`} target="blank">
                  go to bocchi website
                </a>
              </li>
              <li className="list-group-item">
                <div className="d-block">
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="btn btn-primary w-100 text-uppercase"
                  >
                    Back
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
