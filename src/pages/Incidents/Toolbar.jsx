import React from 'react';

import FilterModal from './FilterModal';
import { Icon } from '../../assets/icons';

const Toolbar = () => {
  return (
    <div className="toolbar d-flex justify-content-between flex-grow-1">

      <div className='toolbar-left w-md-50 d-md-flex flex-wrap justify-content-start align-items-end gap-2'>
        <div className='search'><input type="text" className="form-control form-control-md me-2" placeholder="Search Incidents..." /></div>
        <div className='filters'><FilterModal /> </div>
      </div>

      <div className='toolbar-right mobile-floating-buttons flex-grow-1 text-end d-flex justify-content-end gap-2'>
        <span><Icon name="exportIcon" className="icon" size={36} weight={200} /></span>
        <span><Icon name="addIcon"  size={36} className='text-primary icon' fill={1} /></span>
      </div>
    </div>
  );
};

export default Toolbar;
