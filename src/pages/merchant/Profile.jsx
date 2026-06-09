import Sidebar from "../../components/Sidebar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="profile-container">
        <h1>My Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              AS
            </div>

            <div>
              <h2>Arjun Singh Mawri</h2>
              <p>Merchant Account</p>
            </div>
          </div>

          <div className="profile-form">
            <input
              type="text"
              placeholder="Company Name"
              value="LogiTrack Pvt Ltd"
              readOnly
            />

            <input
              type="text"
              placeholder="Owner Name"
              value="Arjun Singh Mawri"
              readOnly
            />

            <input
              type="email"
              placeholder="Email"
              value="arjunmawri@gmail.com"
              readOnly
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value="+91 9368572285"
              readOnly
            />

            <textarea
              placeholder="Company Address"
              value="Noida, Uttar Pradesh"
              readOnly
            ></textarea>

            <button>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;