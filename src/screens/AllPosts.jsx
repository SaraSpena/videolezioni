import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/constant";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AllPosts() {
  //Create a variable to store all posts and a set method to update the value of posts
  //useState hook helps us create this variable with empty array
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  var alertPlaceholder = document.getElementById("alertMessage");
  const navigate = useNavigate();

  //ES6 function to get all posts from REST API
  //function getAllPosts(){}
  const getAllPosts = () => {
    setLoader(true);
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
        setLoader(false);
      });
  };

  function alert(message, type) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-' +
      type +
      ' alert-dismissible" role="alert">' +
      message +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    alertPlaceholder.append(wrapper);
  }

  const deletePost = (postId) => {
    let action = window.confirm("Are you sure");
    if (action) {
      axios
        .delete(`${API_BASE_URL}/posts/${postId}`)
        .then(() => {
          alert(`Post with Id ${postId} has been deleted`, "success");
          navigate("/posts");
        })
        .catch((err) => {
          console.log(err);
          alert(`Error when deleting post`, "danger");
        });
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []); //empty array means call only once when component loads

  return (
    <div>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase pt-4">Featured posts</h3>
        <div id="alertMessage"></div>
        <div className="row">
          {loader ? (
            <div className="col-12 text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                    <img
                      src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg"
                      className="card-img-top"
                      alt="casetta"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <div className="d-flex justify-content-between">
                        <Link
                          to={`/posts/${post.id}/${post.userId}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                        <Link
                          to={`/create/${post.id}/${post.userId}`}
                          className="btn btn-warning"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                          to={`/posts/${post.id}/${post.userId}`}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
export default AllPosts;
