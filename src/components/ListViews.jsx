import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap'; 
import { Icon } from '../assets/icons';

const ListViewDropdown = ({ title, listViews = [], onSelectView }) => {

  const [showListViewDropdown, setShowListViewDropdown] = useState(false)

  const handleListViewDropdownToggle = () => {
    setShowListViewDropdown(!showListViewDropdown);
  };

  return (
    <Dropdown className="list-view-dropdown" onClick={handleListViewDropdownToggle}>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <span className="page-title">{title} {showListViewDropdown ===true ? <Icon name="arrowUpIcon"/> : <Icon name="arrowDownIcon"/>}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listViews.map((view, index) => (
          <Dropdown.Item key={index} onClick={() => onSelectView(view)}>
            {view.name}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item href="#create-custom-view" className="create-custom-view d-flex align-items-center gap-2">
          <Icon name="customizeIcon" size={20} /> {/* Optional icon */}
          Create Custom View
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ListViewDropdown;
