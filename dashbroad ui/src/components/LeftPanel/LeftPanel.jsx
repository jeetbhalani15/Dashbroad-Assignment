import React, { forwardRef } from 'react';
import SidebarStyles from './LeftPanleStyled';
import ProfileImage from './Images/profile-image.svg';
import DefaultIcon from './Images/default-icon.svg';
import EcommerceIcon from './Images/ecommerce-icon.svg';
import ProjectsIcon from './Images/projects-icon.svg';
import OnlineCourseIcon from './Images/online-courses-icon.svg';
import UserprofileIcon from './Images/user-profile-icon.svg';
import AccountIcon from './Images/account-icon.svg';
import BlogIcon from './Images/blog-icon.svg';
import CorporateIcon from './Images/corporate-icon.svg';
import SocialIcon from './Images/social-icon.svg';
import DropArrow from './Images/dropArrow.svg';
import DefaultIconDark from './Images/default-icon-dark.svg'
import EcommerceIconDark from './Images/ecommerce-dark.svg'
import ProjectIconDark from './Images/projects-dark.svg'
import OnlineCourseIconDark from './Images/online-course-dark.svg';
import UserprofileIconDark from './Images/user-profile-dark.svg';
import AccountIconDark from './Images/account-dark.svg';
import BlogIconDark from './Images/blogs-dark.svg';
import CorporateIconDark from './Images/corporate-dark.svg';
import SocialIconDark from './Images/social-dark.svg';
import DropArrowDark from './Images/arrow-dark.svg';

const Sidebar = forwardRef(({ leftPanelView, isDarkMode }, ref) => {
  return (
    <SidebarStyles.Container leftPanelView={leftPanelView} ref={ref} isDarkMode={isDarkMode}>
      {/* Logo and Profile Section */}
      <SidebarStyles.LogoSection>
        <SidebarStyles.Profile>
          <SidebarStyles.ProfileImage src={ProfileImage} alt="Profile" />
          <SidebarStyles.ProfileText isDarkMode={isDarkMode}>ByeWind</SidebarStyles.ProfileText>
        </SidebarStyles.Profile>
      </SidebarStyles.LogoSection>

      {/* Navigation Sections */}
      <SidebarStyles.NavSection>
        <SidebarStyles.HeadingWrap>
          <SidebarStyles.SectionTitle isDarkMode={isDarkMode}>Favorites</SidebarStyles.SectionTitle>
          <SidebarStyles.SectionTitle isDarkMode={isDarkMode} style={{ opacity: "0.5" }} >Recently</SidebarStyles.SectionTitle>
        </SidebarStyles.HeadingWrap>
        <SidebarStyles.NavItem>
          <SidebarStyles.CircleDot /> <span style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Overview</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem>
          <SidebarStyles.CircleDot /> <span style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Projects</span>
        </SidebarStyles.NavItem>

        <SidebarStyles.SectionTitle isDarkMode={isDarkMode}>Dashboards</SidebarStyles.SectionTitle>
        <SidebarStyles.NavItem selected isDarkMode={isDarkMode} >
          <SidebarStyles.ArrowIcon isDefault={true} isDarkMode={isDarkMode}></SidebarStyles.ArrowIcon>
          <SidebarStyles.Icon src={isDarkMode ? DefaultIconDark : DefaultIcon} alt="Default" /> <span>Default</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? EcommerceIconDark : EcommerceIcon} alt="eCommerce" /> <span>eCommerce</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? ProjectIconDark : ProjectsIcon} alt="Projects" /> <span>Projects</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? OnlineCourseIconDark : OnlineCourseIcon} alt="Online Courses" /> <span>Online Courses</span>
        </SidebarStyles.NavItem>

        <SidebarStyles.SectionTitle isDarkMode={isDarkMode}>Pages</SidebarStyles.SectionTitle>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? UserprofileIconDark : UserprofileIcon} alt="User Profile" /> <span>User Profile</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavSubItem isDarkMode={isDarkMode}>Overview</SidebarStyles.NavSubItem>
        <SidebarStyles.NavSubItem isDarkMode={isDarkMode}>Projects</SidebarStyles.NavSubItem>
        <SidebarStyles.NavSubItem isDarkMode={isDarkMode}>Campaigns</SidebarStyles.NavSubItem>
        <SidebarStyles.NavSubItem isDarkMode={isDarkMode}>Documents</SidebarStyles.NavSubItem>
        <SidebarStyles.NavSubItem isDarkMode={isDarkMode}>Followers</SidebarStyles.NavSubItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? AccountIconDark : AccountIcon} alt="Account" /> <span>Account</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? CorporateIconDark : CorporateIcon} alt="Corporate" /> <span>Corporate</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? BlogIconDark : BlogIcon} alt="Blog" /> <span>Blog</span>
        </SidebarStyles.NavItem>
        <SidebarStyles.NavItem isDarkMode={isDarkMode}>
          <SidebarStyles.Icon src={isDarkMode ? DropArrowDark : DropArrow} alt="Drop Arrow" />
          <SidebarStyles.Icon src={isDarkMode ? SocialIconDark : SocialIcon} alt="Social" /> <span>Social</span>
        </SidebarStyles.NavItem>
      </SidebarStyles.NavSection>
    </SidebarStyles.Container >
  );
});

export default Sidebar;
