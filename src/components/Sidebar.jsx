import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../assets/icons';

const navItems = [
  { name: 'Dashboard', path: '/incidents/dashboard', icon: 'dashboardIcon' },
  { name: 'Incidents', path: '/incidents/incidents', icon: 'incidentsIcon' },
  { name: 'Investigations', path: '/incidents/investigation', icon: 'investigateIcon' },
  { name: 'Action Items', path: '/incidents/action-items', icon: 'actionItemsIcon' },
  { name: 'Reports', path: '/incidents/reports', icon: 'reportsIcon' },
  { name: 'Settings', path: '/settings', icon: 'settingsIcon', is_last: true }
];

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [activeItem, setActiveItem] = React.useState('Incidents');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'is-collapsed' : ''}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
      <Icon name="menuCloseIcon" weight={300} />
      </div>
      <nav>
        <ul className="nav flex-column">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${activeItem === item.name ? 'active' : ''} ${item.is_last ? 'is_last' : ''}`}
              onClick={() => handleItemClick(item.name)}
            >
              <Link to={item.path} className={`link-list`}>
                
                  <Icon name={item.icon} size={24} weight={300} />
                  <span className='link-title'>{item.name}</span>
                
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
