import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="col d-flex justify-content-center align-items-center">
        <div className="profileSection">
          {" "}
          <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
              {/* profile-img, name, email */}
              <button className="btn-bank profile-bg">
                <img src="/src/assets/user.png" width="100" height="90" />
              </button>{" "}
              <span className="name m-3">User Name</span>
              <span className="email-id m-1">Email Address</span>
              {/* bank-link display */}
              <div className="d-flex mt-2 bank-container">
                <div className="row">
                  <div className="col">
                    <img src="/src/assets/bank.png" width="50" alt="bank-img" />
                  </div>
                  <div className="col-5 desc">
                    <h5>Bank Link</h5>
                    <p>Connect your bank account to deposit and fund.</p>
                  </div>
                  <div className="col">
                    <img
                      src="/src/assets/check-icon.png"
                      width="50"
                      alt="check-icon"
                    />
                  </div>
                </div>
              </div>
              {/* changePassword Logout Join*/}
              <div className="d-flex mt-4">
                <button className="btn1 btn-space">Change Password</button>
                <button className="btn1">
                  <Link className="btn1" id="loginBtn" to={"/login"}>
                    Logout
                  </Link>
                </button>
              </div>{" "}
              <div className="container-fluid">
                <span className="join d-block w-100">Joined May,2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
