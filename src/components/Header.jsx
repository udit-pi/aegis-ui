import React, { useState, useEffect, act } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../assets/icons';
import logo from '../assets/images/logo.svg';
import MyAccountDropdown from './MyAccountDropdown';
import Notifications from './Notifications';

const navMenuItems = [
  { name: 'HSE', path: '/hse', icon: 'hseIcon', active: true },
  { name: 'Observations', path: '/observations', icon: 'observationsIcon' },
  { name: 'Audits', path: '/audits', icon: 'auditIcon' },
  { name: 'Inspections', path: '/inspections', icon: 'inspectionsIcon' },
  { name: 'Trainings', path: '/trainings', icon: 'trainingsIcon' },
  { name: 'Meetings', path: '/meetings', icon: 'meetingsIcon' },
  { name: 'Library', path: '/library', icon: 'libraryIcon' }
];

const notifications = [
  {
    id: 1,
    title: 'New Incident Created',
    description: 'Incident #1101111 was created by Sandeep Chowdhry',
    date: '4 days ago',
    unread: true,
    dateRange: 'Past week',
    ctaText: 'View Incident',
    ctaLink: '/incident/1101111',
    icon: 'incidentsIcon', // Placeholder for actual icon class or src
  },
  {
    id: 2,
    title: 'New Action Item created',
    description: 'New Action Item created for Incident #90909990 by Gaurav Khupsare',
    date: '10 months ago',
    unread: true,
    dateRange: 'Earlier',
    ctaText: 'view Action Items',
    ctaLink: '/incident/90909090/actionitems',
    icon: 'actionItemsIcon', // Placeholder for actual icon class or src
  },
  {
    id: 1,
    title: 'New Incident Created',
    description: 'Incident #1101111 was created by Sandeep Chowdhry',
    date: '4 days ago',
    dateRange: 'Past week',
    unread: true,
    ctaText: 'View Incident',
    ctaLink: '/incident/1101111',
    icon: 'incidentsIcon', // Placeholder for actual icon class or src
  },
  {
    id: 2,
    title: 'New Action Item created',
    description: 'New Action Item created for Incident #90909990 by Gaurav Khupsare',
    date: '10 months ago',
    dateRange: 'Earlier',
    ctaText: 'view Action Items',
    ctaLink: '/incident/90909090/actionitems',
    icon: 'actionItemsIcon', // Placeholder for actual icon class or src
  },
  {
    id: 1,
    title: 'New Incident Created',
    description: 'Incident #1101111 was created by Sandeep Chowdhry',
    date: '4 days ago',
    dateRange: 'Past week',
    ctaText: 'View Incident',
    ctaLink: '/incident/1101111',
    icon: 'incidentsIcon', // Placeholder for actual icon class or src
  },
  {
    id: 2,
    title: 'New Action Item created',
    description: 'New Action Item created for Incident #90909990 by Gaurav Khupsare',
    date: '10 months ago',
    dateRange: 'Earlier',
    unread: true,
    ctaText: 'view Action Items',
    ctaLink: '/incident/90909090/actionitems',
    icon: 'actionItemsIcon', // Placeholder for actual icon class or src
  },
  // Add more notifications here
];

const Header = () => {
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(true);

  const toggleNavMenu = () => setNavMenuOpen(!isNavMenuOpen);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Mobile Dropdown for Active Navigation */}
      <div className="mobile-nav-toggle d-md-none" onClick={toggleNavMenu}>
        {navMenuItems.find(item => item.active)?.name || 'Menu'}
        <Icon name={isNavMenuOpen ? 'arrowUpIcon' : 'arrowDownIcon'} />
      </div>


      {/* Navigation Menu */}
      <nav className="nav-menu">
        {navMenuItems.map((item, index) => (
          <Link
            to={item.path}
            className={`menu-item ${item.name === 'HSE' ? 'active' : ''}`}
            key={index}
          >
            <Icon name={item.icon} size={24} weight={300} /> 
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isNavMenuOpen && (
        <nav className="nav-menu mobile">
          <ul className="dropdown-menu">
            {navMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`menu-item ${item.name === 'HSE' ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Right Side Menu */}
      <div className="right-menu d-flex align-items-center">
       

        <Notifications notifications={notifications} unread={unreadNotifications} />
         
        <MyAccountDropdown />
      </div>
    </header>
  );
};

export default Header;
