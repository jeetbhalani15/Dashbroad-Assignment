import React, { useState, useEffect, useRef } from 'react'
import { DashboardWrap, DataDisplayWrap } from './IndexStyled'
import RightSidebar from './RightPanel/RightPanel'
import Navbar from './Navbar/Navbar'
import DisplayData from './DisplayData'
import Sidebar from './LeftPanel/LeftPanel'
import OrdersTable from './Graphs/OrdersTable'

function Index() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [leftPanelView, setLeftPanelView] = useState(window.innerWidth > 1024)
  const [rightPanelView, setRightPanelView] = useState(window.innerWidth > 1024)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isOrderList, setIsOrderList] = useState(false)
  const sidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leftPanelView &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setLeftPanelView(false);
      }
      if (
        rightPanelView &&
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(event.target)
      ) {
        setRightPanelView(false);
      }
    };


    const handleResize = () => {
      const mobileView = window.innerWidth <= 1024;
      setIsMobile(mobileView);
      if (!mobileView) {
        setLeftPanelView(true);
        setRightPanelView(true)
      } else {
        setLeftPanelView(false);
        setRightPanelView(false)
      }


    };

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [leftPanelView, rightPanelView, isMobile]);

  return (
    <DashboardWrap>
      <Sidebar leftPanelView={leftPanelView} ref={sidebarRef} isDarkMode={isDarkMode} />
      <DataDisplayWrap leftPanelView={leftPanelView} rightPanelView={rightPanelView}>
        <Navbar leftPanelView={leftPanelView} setLeftPanelView={setLeftPanelView} rightPanelView={rightPanelView} setRightPanelView={setRightPanelView} isMobile={isMobile} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOrderList={isOrderList} setIsOrderList={setIsOrderList} />
        {isOrderList ? <OrdersTable isDarkMode={isDarkMode} /> :
          <DisplayData isDarkMode={isDarkMode} />}
      </DataDisplayWrap>
      <RightSidebar rightPanelView={rightPanelView} ref={rightSidebarRef} isDarkMode={isDarkMode} />
    </DashboardWrap>

  )
}

export default Index