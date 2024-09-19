const icons = {
    hseIcon : "verified_user",
    observationsIcon : "eye_tracking",
    inspectionsIcon : "policy", 
    meetingsIcon : "interpreter_mode",
    auditIcon : "assignment_turned_in",
    libraryIcon : "collections_bookmark",
    trainingsIcon : "school",
    dashboardIcon : "dashboard",
    actionItemsIcon : "add_task",
    menuCloseIcon : "keyboard_tab_rtl",
    menuOpenIcon : "keyboard_tab",
    incidentsIcon : "breaking_news_alt_1",
    closeIcon: "close",

    investigateIcon : "content_paste_search",
    activityIcon : "timeline",
    consequencesIcon : "destruction",
    injuryIcon : "personal_injury",
    addIcon : "add_circle",
    mediaIcon : "attach_file",
    pdfIcon : "picture_as_pdf",
    riskIcon : "encrypted",
    wordIcon : "article",
    settingsIcon : "settings",
    reportsIcon : "finance",
    notificationsIcon : "notifications",
    notificationsUnreadIcon : "notifications_unread",
    moreMenuIcon: "more_vert",
    customizeIcon: "tune",
    exportIcon: "export_notes",
    userIcon: "person",
    arrowDownIcon: "keyboard_arrow_down",
    arrowUpIcon: "keyboard_arrow_up",
    arrowLeftIcon: "keyboard_arrow_left",
    arrowRightIcon: "keyboard_arrow_right",

    
  };



  export const Icon = ({ name, className = "", size = 24, fill = 0, weight = 400, grade = 0, opticalSize = 24 }) => {
    return (
      <span
        className={`material-symbols-outlined ${className}`}
        style={{
          fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
          fontSize: `${size}px`,
        }}
      >
        {icons[name]}
      </span>
    );
  };
  