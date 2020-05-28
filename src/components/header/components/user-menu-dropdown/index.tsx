import React from 'react';
import SlideDropdown from '../../../slide-dropdown';

import './styles.css';

const UserMenuDropdown: React.FC = () => {
  const element = (
    <span className="user-menu">
      <span className="flaticon-profile" />
    </span>
  );
  const content = (
    <ul className="user-menu-content">
      <li>
        <span>My Profile</span>
      </li>
      <li>
        <span>My Orders</span>
      </li>
      <li>
        <span>Logout</span>
      </li>
    </ul>
  );
  return <SlideDropdown element={element} DDContent={content} />;
};

export default UserMenuDropdown;
