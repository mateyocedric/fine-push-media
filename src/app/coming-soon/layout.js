'use client';

import PropTypes from 'prop-types';

import CompactLayout from 'src/layouts/compact';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <CompactLayout noHeader={true}>{children}</CompactLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
