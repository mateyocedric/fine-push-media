'use client';

import PropTypes from 'prop-types';

import ComingSoonLayout from 'src/fpm-layouts/coming-soon';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <ComingSoonLayout>{children}</ComingSoonLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
