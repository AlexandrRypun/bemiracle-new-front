import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import CategoriesList from './components/categories-list';
import LanguageDropdown from './components/language-dropdown';
import UserMenuDropdown from './components/user-menu-dropdown';
import CartIcon from './components/cart-icon';
import { Category } from '../../types/categories';
import useDetectClick from '../../hooks/use-detect-click';
import { BrowserContext } from '../../contexts/browser';
import './styles.css';
import useRequest from '../../hooks/use-request';

enum SubMenus {
  CATEGORIES = 'categories',
}

const Header: React.FC = () => {
  const { isMobile } = useContext(BrowserContext);

  const [categories, setCategories] = useState<Category[]>([]);
  const { get } = useRequest({ endpoint: 'categories' });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const categories = await get<Category[]>();
      setCategories(categories);
    };
    fetchData();
  }, [get, setCategories]);

  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  const [subMenuAlias, setSubMenuAlias] = useState<SubMenus | null>(null);

  const ref = useRef(null);
  const closeMobileMenu = useCallback(() => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
    }
  }, [mobileMenuOpened]);
  useDetectClick({
    ref,
    onClickOutside: closeMobileMenu,
  });

  const [subMenuContent, setSubMenuContent] = useState<React.ReactElement | null>(null);
  const getSubMenuContent = useCallback(
    (subMenuAlias: SubMenus) => {
      switch (subMenuAlias) {
        case SubMenus.CATEGORIES:
          return <CategoriesList categories={categories} />;
        default:
          return null;
      }
    },
    [categories],
  );
  useEffect(() => {
    if (subMenuAlias) {
      setSubMenuContent(getSubMenuContent(subMenuAlias));
    } else {
      setTimeout(() => {
        setSubMenuContent(null);
      }, 200);
    }
  }, [getSubMenuContent, subMenuAlias]);

  const history = useHistory();
  useEffect(() => {
    setMobileMenuOpened(false);
    setSubMenuAlias(null);
  }, [history.location.key]);

  const showSubMenu = useCallback((subMenuAlias: SubMenus | null) => (): void => setSubMenuAlias(subMenuAlias), []);

  return (
    <header id="header" className="header style-02 header-dark">
      {!isMobile ? (
        <div className="header-wrap-stick">
          <div className="header-position">
            <div className="header-middle">
              <div className="akasha-menu-wapper" />
              <div className="header-middle-inner">
                <div className="header-logo-nav">
                  <div className="header-logo">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="box-header-nav menu-nocenter">
                    <ul
                      id="menu-primary-menu"
                      className="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu"
                    >
                      <li
                        id="menu-item-230"
                        className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu"
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="menu-item"
                        onMouseEnter={showSubMenu(SubMenus.CATEGORIES)}
                        onMouseLeave={showSubMenu(null)}
                      >
                        <span className="akasha-menu-item-title">Shop</span>
                        {subMenuAlias === SubMenus.CATEGORIES ? <CategoriesList categories={categories} /> : null}
                      </li>
                      <li
                        id="menu-item-229"
                        className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu"
                      >
                        <Link to="/delivery">Delivery</Link>
                      </li>
                      <li
                        id="menu-item-996"
                        className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-996 parent parent-megamenu item-megamenu"
                      >
                        <Link to="/about-us">About Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-control">
                  <div className="header-control-inner">
                    <div className="meta-dreaming">
                      <ul className="wpml-menu">
                        <li className="menu-item akasha-dropdown block-language">
                          <LanguageDropdown />
                        </li>
                      </ul>
                      <div className="akasha-dropdown-close hidden">x</div>
                      <div className="menu-item block-user block-dreaming akasha-dropdown">
                        <UserMenuDropdown />
                      </div>
                      <CartIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="header-mobile">
            <div className="header-mobile-left">
              <div className="block-menu-bar">
                <span className="menu-bar menu-toggle" onClick={(): void => setMobileMenuOpened(true)}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <ul className="wpml-menu left-menu">
                <li className="menu-item akasha-dropdown block-language">
                  <LanguageDropdown />
                </li>
              </ul>
            </div>
            <div className="header-mobile-mid">
              <div className="header-logo">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="header-mobile-right">
              <div className="header-control-inner">
                <div className="meta-dreaming">
                  <div className="menu-item block-user block-dreaming akasha-dropdown">
                    <UserMenuDropdown />
                  </div>
                  <CartIcon />
                </div>
              </div>
            </div>
          </div>
          <div ref={ref} id="mobile-menu" className={`akasha-menu-clone-wrap ${mobileMenuOpened ? 'open' : ''}`}>
            <div className="akasha-menu-panels-actions-wrap">
              {subMenuContent ? <a className="akasha-menu-prev-panel" onClick={showSubMenu(null)} /> : null}
              <a
                className="akasha-menu-close-btn akasha-menu-close-panels"
                href="#"
                onClick={(): void => setMobileMenuOpened(false)}
              >
                x
              </a>
            </div>
            <div className="akasha-menu-panels">
              <div className="akasha-menu-panel akasha-menu-panel-main">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <a className="akasha-menu-next-panel" onClick={showSubMenu(SubMenus.CATEGORIES)} />
                    <span className="akasha-menu-item-title" onClick={showSubMenu(SubMenus.CATEGORIES)}>
                      Shop
                    </span>
                  </li>
                  <li>
                    <Link to="/delivery">Delivery</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
              <div
                className={`akasha-menu-panel akasha-menu-sub-panel ${
                  subMenuAlias ? 'akasha-menu-panel-opened' : 'akasha-menu-hidden'
                }`}
              >
                {subMenuContent}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
