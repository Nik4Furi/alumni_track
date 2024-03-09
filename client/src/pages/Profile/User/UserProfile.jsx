import React, { useEffect, useState } from "react";
// Bootstrap
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

// import css
import "./css/userProfile.css";

// Data Fecthing Through API
import userData from "../../../data/usersData";

const UserProfile = () => {
  const [data, setData] = useState("");
  let fetchCode = () => {
    const result = userData.find((res) => res.name === "Pankaj Swami Vaishnav");
    setData(result || {});
  };
  useEffect(() => {
    fetchCode();
  }, []);
  const {
    name,
    location,
    imgSrc,
    designation,
    connections,
    posts,
    totalPosts,
  } = data;

  return (
    <div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7 ">
              <div className="card profile_card">
                <div
                  className="rounded-top text-white d-flex flex-row mannual_profile_header bg-dark"
                  style={{ backgroundColor: "#000", height: 300 }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: 150 }}
                  >
                    <img
                      src={imgSrc}
                      alt="random_images"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: 150, zIndex: 1 }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5>{name}</h5>
                    <p>{location}</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <p className="mb-1 h5">{posts}</p>
                      <p className="small text-muted mb-0">Posts</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">{connections}</p>
                      <p className="small text-muted mb-0">Connections</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">{designation}</p>
                      <p className="font-italic mb-1">Lives in {location}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent Post</p>
                  </div>
                  <div className="row g-2">
                    {totalPosts?.map((post, index) => {
                      return (
                        <div className="col-xl-6 mb-2" key={index}>
                          <img
                            src={post}
                            alt="img1"
                            className="w-100 rounded-3"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
