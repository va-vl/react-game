import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import './OutsideLink.scss';

const OutsideLink = ({ href, outerClassName, children }) => (
  <a
    href={href}
    className={clsx('link', outerClassName)}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

OutsideLink.defaultProps = {
  outerClassName: null,
  children: undefined,
};

OutsideLink.propTypes = {
  href: PropTypes.string.isRequired,
  outerClassName: PropTypes.string,
  children: PropTypes.node,
};

export { OutsideLink };
