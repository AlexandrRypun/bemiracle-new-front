import React, { useCallback, useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SlideDropdown from '../../../slide-dropdown';
import { UserContext } from '../../../../contexts/user';
import { cleanAuthTokens } from '../../../../services/auth';

import './styles.css';

type MenuItem = {
  label: string;
  onClick: () => void;
  link?: string;
};

const MainElement: React.ReactElement = (
  <span className="user-menu">
    <span className="flaticon-profile" />
  </span>
);

const UserMenuDropdown: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [closeTrigger, toggleCloseTrigger] = useState<boolean>(false);

  const { t } = useTranslation();

  const menuClickHandler = useCallback(() => {
    toggleCloseTrigger(!closeTrigger);
  }, [toggleCloseTrigger, closeTrigger]);

  const logoutHandler = useCallback(() => {
    setUser(null);
    cleanAuthTokens();
    menuClickHandler();
  }, [setUser, menuClickHandler]);

  const items = useMemo(
    (): MenuItem[] => [
      { label: t('userMenu.myProfile'), link: 'profile', onClick: menuClickHandler },
      { label: t('userMenu.myOrders'), link: 'orders', onClick: menuClickHandler },
      { label: t('userMenu.signOut'), onClick: logoutHandler },
    ],
    [menuClickHandler, logoutHandler, t],
  );

  const content = useMemo(
    () => (
      <ul className="user-menu-content">
        {user ? (
          items.map((item, i) => (
            <li key={i}>
              {item.link ? (
                <Link to={item.link} onClick={item.onClick}>
                  {item.label}
                </Link>
              ) : (
                <span onClick={item.onClick}>{item.label}</span>
              )}
            </li>
          ))
        ) : (
          <li>
            <Link to="/signin" onClick={menuClickHandler}>
              {t('userMenu.signIn')}
            </Link>
          </li>
        )}
      </ul>
    ),
    [items, menuClickHandler, t, user],
  );
  return <SlideDropdown element={MainElement} DDContent={content} closeTrigger={closeTrigger} />;
};

export default UserMenuDropdown;
