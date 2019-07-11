import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import { makeSelectLocation } from 'containers/App/selectors';

function SubMenu({ location }) {
  const { pathname } = location;
  return (
    <div id="w-node-22521a87e914-1a87e8c5" className="sub-menu-wrapper">
      <a
        href="/"
        className={classNames('sub-menu-link', 'w-inline-block', {
          'w--current': pathname === '/',
        })}
      >
        <div className="sub-menu-text">pre-order</div>
      </a>
      <Link
        to="/my-inventory"
        className={classNames('sub-menu-link', 'w-inline-block', {
          'w--current': pathname === '/my-inventory',
        })}
      >
        <div className="sub-menu-text">my inventory</div>
      </Link>
      <Link
        to="/guides"
        className={classNames(
          'sub-menu-link',
          'w-inline-block',
          'last-sub-menu-item',
          { 'w--current': pathname === '/guides' },
        )}
      >
        <div className="sub-menu-text">guides</div>
      </Link>
    </div>
  );
}

SubMenu.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(SubMenu);
