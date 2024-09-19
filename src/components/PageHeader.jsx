import React from 'react';
import ListViewsDropdown from './ListViews';
import { Icon } from '../assets/icons';

const PageHeader = ({ title, subtitle, breadcrumbs, toolbar, listViews = [], onSelectView }) => {
  return (
    <div className="page-header container-fluid">
      <div className='page-header-left'>
        <div className='breadcrumbs'>{breadcrumbs}</div>
        {listViews.length > 0 ? (
          <ListViewsDropdown
            title={title} // Passing the title to the dropdown
            listViews={listViews} // List view data
            onSelectView={onSelectView} // Function to handle selection
          />
        ) : (
          <div className='page-title'>{title}</div>
        )}
      </div>
      {toolbar}
    </div>
  );
};

export default PageHeader;
