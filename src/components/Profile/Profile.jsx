import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="profile-img">
        <img src="/client-2.jpg" alt="" />
      </div>
      <div className="profile-bio">
        <p>Hi,Elizabeth</p>
        <h3>Mon, 15 May, 2023</h3>
      </div>
    </div>
  );
};

export default Profile;
