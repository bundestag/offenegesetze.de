import React from 'react';
import Link from 'next/link';

import SearchBox from '../search/search-box';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;
    const { hideSearch, navItems } = this.props;
    return (
      <nav className="navbar is-fixed-top" style={{ zIndex: '1000' }}>
        <div className="container">
          <div className="navbar-brand">
            <Link prefetch href="/">
              <a className="navbar-item" href="/">
                <img
                  alt="Scale"
                  src="/static/logo_small.jpg"
                  width="28"
                  height="28"
                  style={{ marginRight: '0.5rem' }}
                  alt="OffeneGesetze"
                />
                <b>OffeneGesetze.de</b>
              </a>
            </Link>
            <div
              className={
                isActive
                  ? 'navbar-burger burger is-active'
                  : 'navbar-burger burger'
              }
              data-target="navbarExampleTransparentExample"
              onClick={() => this.setState({ isActive: !this.state.isActive })}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navbarExampleTransparentExample"
            className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}
          >
            <div
              className="navbar-start"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              {!hideSearch && (
                <div className="navbar-item is-expanded">
                  <form action="/suche" style={{ width: '100%' }}>
                    <SearchBox />
                  </form>
                </div>
              )}
              {navItems}
            </div>

            <div className="navbar-end">
              <Link prefetch href="/veroeffentlichung">
                <a className="navbar-item" href="/veroeffentlichung">
                  Veröffentlichungen
                </a>
              </Link>
              <Link prefetch href="/faq">
                <a className="navbar-item is-hidden-tablet	" href="/faq">
                  FAQ
                </a>
              </Link>
              <Link prefetch href="/kontakt">
                <a className="navbar-item" href="/kontakt">
                  Kontakt
                </a>
              </Link>
              <Link prefetch href="/datenschutz">
                <a className="navbar-item is-hidden-tablet	" href="/datenschutz">
                  Datenschutz
                </a>
              </Link>
              <Link prefetch href="/daten">
                <a className="navbar-item is-hidden-tablet	" href="/daten">
                  Download & API
                </a>
              </Link>
              <Link prefetch href="/feeds">
                <a className="navbar-item is-hidden-tablet	" href="/feeds">
                  RSS-Feeds
                </a>
              </Link>
              <Link prefetch href="/presse">
                <a className="navbar-item is-hidden-tablet	" href="/presse">
                  Presse
                </a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          // .navbar.is-transparent,
          // .navbar .button,
          // .navbar input {
          //   background-color: transparent;
          //   background-image: none;
          // }

          .navbar a {
            color: inherit;
          }
        `}</style>
      </nav>
    );
  }
}

export default Nav;
