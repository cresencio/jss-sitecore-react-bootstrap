import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import logo from '../../assets/sc_logo.svg';

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
let Navigation = ({ t, i18n }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/" className="text-dark">
        <img src={logo} alt="Sitecore" />
      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Documentation')}
      </a>
      <NavLink to="/styleguide" className="p-2 text-dark">
        {t('Styleguide')}
      </NavLink>
      <NavLink to="/graphql" className="p-2 text-dark">
        {t('GraphQL')}
      </NavLink>
    </nav>
  </div>
);

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = withTranslation()(Navigation);

const SiteHeader = (props) => (
  <header id="site-header">
    <Navigation />
    <Placeholder name="site-header" rendering={props.rendering} />
  </header>
);

export default SiteHeader;