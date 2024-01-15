import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './Sidebar.css';

const categories = [
  {
    icons: [
      { icon: "ic:outline-home", title: 'Dashboard', path: '/1' },
      { icon: "vaadin:line-bar-chart", title: 'User', path: '/2' },
      { icon: "teenyicons:pie-chart-outline", title: 'Org-Accounts', path: '/3' },
    ],
  },
  {
    heading: 'USER DETAILS',
    icons: [
      { icon: "fluent:people-add-16-regular", title: 'User', path: '/4' },
      { icon: "tabler:user-cog", title: 'Organisation', path: '/5' },
      { icon: "tabler:user-cog", title: 'Deposite', path: '/6' },
      { icon: "tabler:user-cog", title: 'Withdrawal', path: '/7' },
      { icon: "tabler:user-cog", title: 'Partner', path: '/8' },
      { icon: "tabler:user-cog", title: 'Market Maker', path: '/9' },
      { icon: "tabler:user-cog", title: 'My User', path: '/10' },

    ],
  },
  {
    heading: 'KYC DETAILS',
    icons: [
      { icon: "solar:wallet-outline", title: 'Pending KYC', path: '/11' },
      { icon: "simple-line-icons:calender", title: 'Approved KYC', path: '/12' },
    ],
  },
  {
    heading: 'STAMP',
    icons: [
      { icon: "vaadin:money-deposit", title: 'Add Stamp', path: '/13' },
      { icon: "ic:outline-padding", title: 'Stamp Records', path: '/14' },
    ],
  },
  {
    heading: 'PARTNER',
    icons: [
      { icon: "uil:money-withdrawal", title: 'Partner Request', path: '/15' },
      { icon: "ic:outline-padding", title: ' Approved Partner', path: '/16' },
      { icon: "ic:outline-padding", title: 'Rejected Partner', path: '/17' },

    ],
  },
  {
    heading: 'P-INVESTMENT',
    icons: [
      { icon: "streamline:investment-selection", title: 'P-Investment Request', path: '/18' },
      { icon: "ic:outline-padding", title: 'Approved P-Investment', path: '/19' },
      { icon: "ic:outline-padding", title: 'Reject P-Investment ', path: '/20' },
      { icon: "ic:outline-padding", title: 'Org-Investment to P-Investment', path: '/21' },

    ],
  },
  {
    heading: 'P-DEPOSIT',
    icons: [
      { icon: "mdi:partnership-outline", title: 'P-Deposit Request', path: '/22' },
      { icon: "mdi:partnership-outline", title: 'P-Deposit Approved', path: '/23' },
      { icon: "mdi:partnership-outline", title: 'P-Deposit Rejected', path: '/24' },
      { icon: "mdi:partnership-outline", title: 'P-Deposite to O-Profit', path: '/25' },
      { icon: "mdi:partnership-outline", title: 'P-Deposit to OrgInvestment', path: '/26' },
    ],
  },
  {
    heading: 'P-WITHDRAWAL',
    icons: [
      { icon: "carbon:global-loan-and-trial", title: 'P-Withdrawal Request', path: '/27' },
      { icon: "carbon:global-loan-and-trial", title: 'P-Withdrawal Approved', path: '/28' },
      { icon: "carbon:global-loan-and-trial", title: 'P-Withdrawal Rejected', path: '/29' },
      { icon: "carbon:global-loan-and-trial", title: 'Partner MP to P-Withdrawal', path: '/30' }
    ],
  },
  {
    heading: 'PARTNER FUNDS',
    icons: [
      { icon: "iconamoon:profile", title: 'Partner-MP to Org-MP', path: '/31' },
      { icon: "uil:setting", title: 'Org-Profit to Partner-MP & Org Distributer', path: '/32' },
      { icon: "material-symbols:logout", title: 'PDistributor to User', path: '/33' },
      { icon: "material-symbols:logout", title: 'O-Investment To O-MP', path: '/34' },
    ],
  },
  {
    heading: 'INTERNAL TRANSFER FUND',
    icons: [
      { icon: "iconamoon:profile", title: 'Internal Transfer History', path: '/35' },

    ],
  },
  {
    heading: 'DEPOSIT',
    icons: [
      { icon: "iconamoon:profile", title: 'Deposit Request', path: '/36' },
      { icon: "iconamoon:profile", title: ' Approved Deposit', path: '/37' },
      { icon: "iconamoon:profile", title: ' Rejected Deposit', path: '/38' },
      { icon: "iconamoon:profile", title: 'O-Deposit', path: '/39' },
      { icon: "iconamoon:profile", title: 'O-Deposit-History', path: '/40' },

    ],
  },
  {
    heading: 'WITHDRAWAL',
    icons: [
      { icon: "iconamoon:profile", title: 'Withdrawal Request', path: '/41' },
      { icon: "iconamoon:profile", title: 'Approved Withdrawal', path: '/42' },
      { icon: "iconamoon:profile", title: 'Rejected Withdrawal', path: '/43' },
      { icon: "iconamoon:profile", title: 'O-Withdrawal', path: '/44' },
      { icon: "iconamoon:profile", title: 'O-Withdrawal History', path: '/45' },

    ],
  },
  {
    heading: '12 PHRASE REQUEST',
    icons: [
      { icon: "iconamoon:profile", title: 'Pending 12 Phrase', path: '/46' },
      { icon: "iconamoon:profile", title: 'Approv 12 Phrase', path: '/47' },
      { icon: "iconamoon:profile", title: 'Reject 12 Phrase', path: '/48' },
    ],
  },
  {
    heading: 'WEBSITE',
    icons: [
      { icon: "iconamoon:profile", title: 'Bank Details', path: '/49' },
      { icon: "iconamoon:profile", title: 'My Profile', path: '/50' },
      { icon: "iconamoon:profile", title: 'Investment Returns', path: '/51' },
    ],
  },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageSource, setImageSource] = useState('');
  const sidebarRef = useRef(null);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleOutsideClick = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      window.innerWidth >= 300 &&
      window.innerWidth <= 500
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const setProfileImage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 300 && screenWidth <= 500) {
        setImageSource('./images/hanberger.png');
      } else {
        setImageSource('https://cdn-icons-png.flaticon.com/512/700/700674.png');
      }
    };

    setProfileImage();

    window.addEventListener('resize', setProfileImage);

    return () => {
      window.removeEventListener('resize', setProfileImage);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='name_fetch' onClick={handleToggleSidebar}>
        {isExpanded ? (
          <div className='fetched_data_main'>
            <div style={{color:"#e12c6b"}}>Hey</div>
            <div>Paresh Balu Patil</div>
          </div>
        ) : (
          <img
            src={imageSource}
            alt="Profile Image"
            className='profile_side_img'
          />
        )}
      </div>

      {categories.map((category, index) => (
        <div key={index} className='Side_makeAlign'>
          {isExpanded && <div className="heading">{category.heading}</div>}
          {category.icons.map((icon, iconIndex) => (
            <NavLink
              key={iconIndex}
              to={icon.path}
              className="nav-link"
              activeClassName="active"
              onClick={handleLinkClick}
            >
              <div className="icon" title={icon.title}>
                <Icon className='icon_size' icon={icon.icon} color="white" />
                {isExpanded && <span className="icon-text">{icon.title}</span>}
              </div>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;