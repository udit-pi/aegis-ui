import React, { useState } from 'react';
import { Icon } from '../assets/icons'; // Assuming you're using a central Icon component
//import userProfileImage from '../assets/images/user-profile.jpg'; // Replace with actual user profile image path


const user = {
  name: "Jonita Doe",
  email: "jonita@hseocrg.com",
  profile_pic: "" 
};

// Function to generate initials from name
//Ideally, this should come from API
const getInitials = (name) => {
  const nameParts = name.split(" ");
  if (nameParts.length > 1) {
    return nameParts[0][0] + nameParts[1][0];
  }
  return name[0];
};

const UserDropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    // Handle logout functionality here
    console.log("Logged out");
  };

  return (
    <div className="dropdown myaccount-dropdown">
      <span
        onClick={toggleDropdown}
        className="dropdown-toggle user-name d-flex align-items-center gap-1"
        id="userDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded={isDropdownVisible}
      >
        <Icon name="userIcon" className='user-icon' weight={300} /> <span className='user-name'>{user.name}</span>
      </span>
      <ul className={`dropdown-menu dropdown-menu-end ${isDropdownVisible ? "show" : ""}`} aria-labelledby="userDropdown">
        <li className="dropdown-item d-flex align-items-center">
          {user.profile_pic ? (
            <img src={user.profile_pic} alt={user.name} className="rounded-circle me-2" width="40" height="40" />
          ) : (
            <div className="name-initials rounded-circle d-flex justify-content-center align-items-center me-2" style={{ width: '40px', height: '40px' }}>
              {getInitials(user.name)}
            </div>
          )}
          <div>
            <h6 className="mb-0">{user.name}</h6>
            <small>{user.email}</small>
          </div>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#account">Manage your Account</a></li>
        <li><a className="dropdown-item" href="#billing">Billing & Subscription</a></li>
        <li><a className="dropdown-item" href="#preferences">Preferences</a></li>
        <li><a className="dropdown-item" href="#help">Help Center</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
            <Icon name="logout" className="me-2" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
