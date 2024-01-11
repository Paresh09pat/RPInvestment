import React, { useState } from 'react';
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

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {categories.map((category, index) => (
        <div key={index} className='Side_makeAlign'>
          {isExpanded && <div className="heading">{category.heading}</div>}
          {category.icons.map((icon, iconIndex) => (
            <NavLink key={iconIndex} to={icon.path} className="nav-link" activeClassName="active">
              <div className="icon" title={icon.title}>
                <Icon className='icon_size'  icon={icon.icon} color="white" />
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
