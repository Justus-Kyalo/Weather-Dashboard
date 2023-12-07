
import "./Profile.css";
import format from "date-fns/format";

const Profile = () => {

  return (
    <div className="Profile">
      <div className="profile-img">
        <img src="/client-2.jpg" alt="" />
      </div>
      <div className="profile-bio">
        <p>Hi,Elizabeth</p>
        <h3>{format(new Date(), "EEE, dd MMM, yyyy")}</h3>
      </div>
    </div>
  );
};


export default Profile;
