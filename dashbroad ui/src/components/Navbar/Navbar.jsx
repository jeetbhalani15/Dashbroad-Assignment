import React, { useEffect, useRef, useState } from 'react';
import NavbarStyles from './NavbarStyled';
import Joyride from 'react-joyride';
import { Tooltip } from 'react-tooltip'; // Import Tooltip instead of ReactTooltip
import FavIcon from './Images/fav.svg';
import LeftPanelView from './Images/Sidebar.svg';
import ThemeIcon from './Images/theme.svg';
import RecentIcon from './Images/recent.svg';
import NotificationIcon from './Images/notification.svg';
import SearchIconImg from './Images/search.svg';
import FavIconDark from './Images/fav-dark.svg';
import LeftPanelViewDark from './Images/left-panel-dark.svg';
import ThemeIconDark from './Images/theme-dark.svg';
import RecentIconDark from './Images/activity-dark.svg';
import NotificationIconDark from './Images/notification-dark.svg';
import SearchIconImgDark from './Images/search-dark.svg';

function Navbar({ leftPanelView, setLeftPanelView, rightPanelView, setRightPanelView, isMobile, isDarkMode, setIsDarkMode, isOrderList, setIsOrderList }) {
  const searchRef = useRef(null);
  const [run, setRun] = useState(false);

  const steps = [
    {
      target: '.navbar-left-toggle',
      content: 'Toggle the Left Panel view here.',
    },
    {
      target: '.navbar-dark-mode',
      content: 'Switch between Light and Dark Mode.',
    },
    {
      target: '.navbar-search-bar',
      content: 'Search quickly with the shortcut ⌘ /.',
    },
    {
      target: '.navbar-notification',
      content: 'Check your recent notifications here.',
    },
    {
      target: '.navbar-fav',
      content: 'View your favorites from here.',
    }
  ];

  const handleGlobalKeyDown = (event) => {
    if (event.metaKey && event.key === '/') {
      event.preventDefault();
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('guideCompleted')) {
      setRun(true);
    }

    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('guideCompleted');
    });

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('guideCompleted');
      });
    };
  }, []);

  const handleLeftPanelToggle = () => {
    if (isMobile) {
      setLeftPanelView(!leftPanelView);
      if (!leftPanelView) {
        setRightPanelView(false);
      }
    } else {
      setLeftPanelView(!leftPanelView);
    }
  };

  const handleRightPanelToggle = () => {
    if (isMobile) {
      setRightPanelView(!rightPanelView);
      if (!rightPanelView) {
        setLeftPanelView(false);
      }
    } else {
      setRightPanelView(!rightPanelView);
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleViews = () => {
    setIsOrderList(!isOrderList);
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: '#1470ec',
            backgroundColor: '#fff',
            textColor: '#333',
            arrowColor: '#fff',
          },
          tooltip: {
            fontSize: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          },
          tooltipContainer: {
            textAlign: 'center',
          },
          tooltipTitle: {
            fontWeight: 'bold',
            fontSize: '18px',
          },
          tooltipContent: {
            padding: '10px',
          },
          buttonNext: {
            backgroundColor: '#1470ec',
            color: '#fff',
            borderRadius: '4px',
            padding: '8px 12px',
          },
          buttonBack: {
            color: '#1470ec',
            fontWeight: 'bold',
          },
        }}
        callback={(data) => {
          const { status } = data;
          if (status === 'finished' || status === 'skipped') {
            setRun(false);
            localStorage.setItem('guideCompleted', 'true');
          }
        }}
      />

      <NavbarStyles.NavbarWrap isDarkMode={isDarkMode}>
        <NavbarStyles.NavbarLeftWrap>
          <NavbarStyles.NavbarIcons
            data-tooltip-id="leftPanelTooltip"
            data-tooltip-content="Toggle Left Panel"
            onClick={handleLeftPanelToggle}
            src={isDarkMode ? LeftPanelViewDark : LeftPanelView}
            alt='left-view'
            className="navbar-left-toggle"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="favTooltip"
            data-tooltip-content="Favorites"
            src={isDarkMode ? FavIconDark : FavIcon}
            alt='fav'
            className="navbar-fav"
          />
          <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ opacity: "0.8" }}>Dashboards</NavbarStyles.NavbarCrumbs>
          <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ opacity: "0.8" }}>/</NavbarStyles.NavbarCrumbs>
          <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Default</NavbarStyles.NavbarCrumbs>
          <NavbarStyles.NavbarCrumbs isDarkMode={isDarkMode} onClick={toggleViews} style={{ color: isDarkMode ? "#FFFFFF" : "", textDecoration: 'underline' }}>
            {isOrderList ? "Default View" : "Orders List"}
          </NavbarStyles.NavbarCrumbs>
        </NavbarStyles.NavbarLeftWrap>
        <NavbarStyles.NavbarRightWrap>
          <NavbarStyles.SearchBarWrap className="navbar-search-bar">
            <NavbarStyles.SearchIcon src={isDarkMode ? SearchIconImgDark : SearchIconImg} alt='search' />
            <NavbarStyles.SearchBar
              isDarkMode={isDarkMode}
              ref={searchRef}
              type='text'
              placeholder='Search'
            />
            <NavbarStyles.ShortcutDisplay isDarkMode={isDarkMode}>⌘ /</NavbarStyles.ShortcutDisplay>
          </NavbarStyles.SearchBarWrap>
          <NavbarStyles.NavbarIcons
            data-tooltip-id="themeTooltip"
            data-tooltip-content="Switch Theme"
            onClick={handleDarkMode}
            src={isDarkMode ? ThemeIconDark : ThemeIcon}
            alt='theme'
            className="navbar-dark-mode"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="recentTooltip"
            data-tooltip-content="Recent Activities"
            onClick={handleRightPanelToggle}
            src={isDarkMode ? RecentIconDark : RecentIcon}
            alt='recent'
            className="navbar-notification"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="notificationTooltip"
            data-tooltip-content="Notifications"
            onClick={handleRightPanelToggle}
            src={isDarkMode ? NotificationIconDark : NotificationIcon}
            alt='notification'
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="notificationTooltip"
            data-tooltip-content="Right Panel Toggle"
            onClick={handleRightPanelToggle}
            src={isDarkMode ? LeftPanelViewDark : LeftPanelView}
            alt='notification'
          />
        </NavbarStyles.NavbarRightWrap>
      </NavbarStyles.NavbarWrap>

      <Tooltip id="leftPanelTooltip" />
      <Tooltip id="favTooltip" />
      <Tooltip id="themeTooltip" />
      <Tooltip id="recentTooltip" />
      <Tooltip id="notificationTooltip" />
    </>
  );
}

export default Navbar;
