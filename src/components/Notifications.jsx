import React, { useState } from 'react';
import { Icon } from '../assets/icons'; // Assuming you're using a central Icon component

const NotificationsDropdown = ({ notifications = [], unread = false }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For handling ellipsis dropdowns per notification

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMoreInfoDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Toggle open/close for specific ellipsis menu
  };

  return (
    <div className="dropdown notifications-dropdown">
      {/* Notification bell button */}
      <span
        onClick={toggleDropdown}
        className={`dropdown-toggle notification-bell ${unread ? 'unread' : ''}`} // Add 'unread' class if there are unread notifications
        id="notificationsDropdown"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded={isDropdownVisible}
        data-bs-auto-close="outside"
      >
        {/* If there are unread notifications, display a different icon */}
        {unread ? (
          <Icon name="notificationsUnreadIcon" className='bell-icon' size={24} />
        ) : (
          <Icon name="notificationsIcon" className='bell-icon'  size={24} />
        )}
      </span>

      {/* Dropdown menu */}
      <div className={`dropdown-menu notifications-menu dropdown-menu-end ${isDropdownVisible ? 'show' : ''}`} aria-labelledby="notificationsDropdown">
        {/* Map through notifications */}
        {notifications.length ? (
          notifications.map((notification, index) => (
            <div key={index} className={`notification-item dropdown-item d-flex align-items-start ${notification.unread ? "unread" : ""}`}>
              <div className="me-2 notification-icon">
                <Icon name="notificationsIcon" size={20} weight={300} />
              </div>
              <div className="notifications-details">
                <h6 className="mb-1 notification-title">{notification.title}</h6>
                <p className="mb-2 text-muted notification-description">{notification.description}</p>
                <div className="ctas d-flex align-items-end">
                  <a href={notification.ctaLink} className="btn btn-outline-dark btn-sm notification-cta">
                    {notification.ctaText}
                  </a>
                  
                </div>
                <p className="mt-2 text-muted small notification-date">{notification.date}</p>
              </div>

              {/* Ellipsis dropdown */}
              <div className="more-info ms-auto position-relative">
                <span
                  className="dropdown-toggle"
                  id={`moreInfoDropdown_${index}`}
                  role="button"
                  aria-expanded={activeDropdown === index}
                  onClick={() => toggleMoreInfoDropdown(index)}
                  data-bs-auto-close="true"
                >
                  <Icon name="moreMenuIcon" />
                </span>
                <div className={`moreinfo-menu dropdown-menu dropdown-menu-end ${activeDropdown === index ? 'show' : ''}`} aria-labelledby={`moreInfoDropdown_${index}`}>
                  <button className="moreinfo-item dropdown-item btn btn-sm">Mark as Read</button>
                  <button className="moreinfo-item dropdown-item btn btn-sm">Remove Notification</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="dropdown-item text-muted">No new notifications</div>
        )}

        {/* Mark all as Read */}
        <div className="dropdown-item notification-item border-top">
          <a href="#mark-all-as-read" className="btn btn-outline-secondary btn-sm">
            Mark all as Read
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
