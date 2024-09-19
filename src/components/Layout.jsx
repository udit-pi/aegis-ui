import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import PageHeader from './PageHeader';

const Layout = ({ title="Dashboard", subtitle="", breadcrumbs="", toolbar ="", className="home", listViews = [], onSelectView,  children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarState');
    return savedState === 'collapsed';
  });

  const theme = process.env.REACT_APP_THEME || 'light';

  useEffect(() => {
    // Apply the data-bs-theme attribute to the <html> element for global theming
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Update body class based on sidebar state
    document.body.classList.toggle('sidebar-collapsed', isSidebarCollapsed);
    document.body.classList.toggle('sidebar-expanded', !isSidebarCollapsed);

    // Store the state in localStorage
    localStorage.setItem('sidebarState', isSidebarCollapsed ? 'collapsed' : 'expanded');
  }, [isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  return (
    <div className={`main`}>
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <Header />
      <div className="main-page">
        <PageHeader title={title} subtitle={subtitle} toolbar={toolbar} breadcrumbs={breadcrumbs} listViews={listViews} onSelectView={onSelectView} />
        <div className={`container-fluid content ${className}`}>
          {children}
        </div>
        <Footer />
      </div>
    </div> 
  );
};

export default Layout;
