import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Dropdown, DropdownButton, Pagination } from "react-bootstrap";
import Toolbar from './Toolbar';
import { Icon } from '../../assets/icons';
import CustomPagination  from '../../components/CustomPagination';

const Incidents = () => {

  const [activeRowDropdown, setActiveRowDropdown] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages ---> remove this in production
  const totalPages = 10;
  
  const [incidentsData, setIncidentsData] = useState([]);

  const [selectedView, setSelectedView] = useState(null);

  const sampleData = [
    {
      id: "INC-2024-0000013",
      eventDate: "21 Aug 2024",
      businessUnit: "Operations",
      site: "Rig Site",
      type: "Lost Time Injuries",
      potential: "High",
      riskMatrix: "B2At",
      reportedBy: "John Doe",
      reportedOn: "15-Aug-2024",
      status: "Draft",
    },
    {
      id: "INC-2024-0000014",
      eventDate: "22 Aug 2024",
      businessUnit: "Operations",
      site: "Rig Site",
      type: "Alcohol or Drug Impairment",
      potential: "Normal",
      riskMatrix: "C2LG",
      reportedBy: "Jane Doe",
      reportedOn: "15-Aug-2024",
      status: "Draft",
    },
    // Add more sample rows here
  ];


  const listViews = [
    { name: 'Draft Incidents' },
    { name: 'Approved Incidents' },
    { name: 'High Potential Incidents' },
    { name: 'Shared Incidents' },
    { name: 'High Risk Incidents' },
    { name: 'Action Items Approved' },
    { name: 'Closed Investigation Status' },
    { name: 'Personnel Consequences' },
    { name: 'Asset Damage Consequences' }
  ];

  const handleRowDropdownToggle = (id) => {
    setActiveRowDropdown(activeRowDropdown === id ? null : id);
  };

  const handleListViewSelect = (view) => {
    setSelectedView(view.name); // Handle the selection of the view
    console.log(`Selected View: ${view.name}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // may be add logic to call api again with new page nummber
  };

  // Simulate an API call (you can replace this with real API)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, eventDate: '15-Aug-2024', businessUnit: 'Operations', site: 'Rig Site', type: 'Lost Time Injuries', potential: 'High', reportedBy: 'John Doe', status: 'Draft' },
        { id: 2, eventDate: '16-Aug-2024', businessUnit: 'Operations', site: 'Rig Site', type: 'First Aid Case', potential: 'Normal', reportedBy: 'Jane Doe', status: 'Final' },
        // Add more dummy or fetched data
      ];
      setIncidentsData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout
      title="Incidents"
      toolbar={<Toolbar />}
      breadcrumbs='HSE'
      listViews={listViews.length && listViews}
      onSelectView={handleListViewSelect}
    >
      <div className="table-responsive">
        <div className='table-info d-flex text-sm text-muted justify-content-between  align-items-center '>
          <div className='table-info-left'>Showing 50 of 1099</div>
          <div className='table-info-right text-end d-flex align-items-center justify-content-end gap-3'>
            <a href="#">Customize Column</a>
            <CustomPagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              
            />
          </div>
        </div>
        <table className="table table-striped table-sm table-hover align-middle ">
          <thead>
            <tr>
              <th>#</th>
              <th>Event Date</th>
              <th>Business Unit</th>
              <th>Site</th>
              <th>Type</th>
              <th>Potential</th>
              <th>Risk Matrix</th>
              <th>Reported By</th>
              <th>Reported On</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((incident) => (
              <tr key={incident.id}>
                <td>{incident.id}</td>
                <td>{incident.eventDate}</td>
                <td>{incident.businessUnit}</td>
                <td>{incident.site}</td>
                <td>{incident.type}</td>
                <td>{incident.potential}</td>
                <td>{incident.riskMatrix}</td>
                <td>{incident.reportedBy}</td>
                <td>{incident.reportedOn}</td>
                <td>{incident.status}</td>
                <td>
                  <DropdownButton
                    id={`dropdown-${incident.id}`}
                    title={activeRowDropdown === incident.id ? <Icon name="closeIcon" /> : <Icon name="moreMenuIcon" />}
                    onClick={() => handleRowDropdownToggle(incident.id)}
                    show={activeRowDropdown === incident.id}
                    className="row-actions-dropdown btn-link"
                    drop="up"
                  >
                    <Dropdown.Item href="#/details">See Details</Dropdown.Item>
                    <Dropdown.Item href="#/edit">Edit Incident</Dropdown.Item>
                    <Dropdown.Item href="#/action-items">Action Items</Dropdown.Item>
                    <Dropdown.Item href="#/investigations">Investigations</Dropdown.Item>
                    <Dropdown.Item href="#/archive">Archive</Dropdown.Item>
                    <Dropdown.Item href="#/download">Download</Dropdown.Item>
                    <Dropdown.Item href="#/trash">Trash</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Incidents;
