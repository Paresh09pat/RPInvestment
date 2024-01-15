import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.css';

const categories = [
  {
    icons: [
      { icon: "ic:outline-home", title: 'Dashboard', path: '/Dashboard' },
      { icon: "vaadin:line-bar-chart", title: 'Ledger', path: '/Ledger' },
      { icon: "teenyicons:pie-chart-outline", title: 'Portfolio', path: '/Portfolio' },
    ],
  },
  {
    heading: 'NETWORK',
    icons: [
      { icon: "fluent:people-add-16-regular", title: 'Add User', path: '/Adduser' },
      { icon: "tabler:user-cog", title: 'My User', path: '/Myuser' },

    ],
  },
  {
    heading: 'INTERNAL FUND TRANSFER',
    icons: [
      { icon: "solar:wallet-outline", title: 'Fund Transefer', path: '/FundTransefer' },
      { icon: "simple-line-icons:calender", title: 'Fund Transefer Records', path: '/FundTranseferRecords' },

    ],
  },
  {
    heading: 'DEPOSITE',
    icons: [
      { icon: "vaadin:money-deposit", title: 'Deposit', path: '/Deposit' },
      { icon: "ic:outline-padding", title: 'Deposit Records', path: '/DepositRecords' },

    ],
  },
  {
    heading: 'WITHDRAWAL',
    icons: [
      { icon: "uil:money-withdrawal", title: 'Withdrawal', path: '/Withdrawal' },
      { icon: "ic:outline-padding", title: 'Withdrawal Records', path: '/WithdrawalRecords' },

    ],
  },
  {
    heading: 'INVESTMENT',
    icons: [
      { icon: "streamline:investment-selection", title: 'Investment Form', path: '/InvestmentForm' },
      { icon: "ic:outline-padding", title: 'Investment Records', path: '/InvestmentFormRecords' },

    ],
  },
  {
    heading: 'PARTNER',
    icons: [
      { icon: "mdi:partnership-outline", title: 'Partner Portfolio', path: '/PartnerPortfolio' },
      { icon: "mdi:partnership-outline", title: 'Partner Records', path: '/PartnerRecords' },
      { icon: "mdi:partnership-outline", title: 'Investment Request', path: '/InvestmentRequest' },
      { icon: "mdi:partnership-outline", title: 'Withdrawal Request', path: '/WithdrawalRequest' },
      { icon: "mdi:partnership-outline", title: 'Partner Deposite', path: '/PartnerDeposite' },
      { icon: "mdi:partnership-outline", title: 'P_Deposite', path: '/P_Deposite' },
      { icon: "mdi:partnership-outline", title: 'P_Withdrawal', path: '/P_Withdrawal' }
    ],
  },
  {
    heading: 'LOAN',
    icons: [
      { icon: "carbon:global-loan-and-trial", title: 'Apply For Loan', path: '/ApplyLoan' }
    ],
  },
  {
    heading: 'PROFILE',
    icons: [
      { icon: "iconamoon:profile", title: 'My Profile', path: '/MyProfile' },
      { icon: "uil:setting", title: 'Setting', path: '/Setting' },
      { icon: "material-symbols:logout", title: 'Logout', path: '/Logout' },
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
            <div style={{ color: "#e12c6b" }}>Hey</div>
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