import * as React from 'react';
import PropTypes from 'prop-types';
//
import './OutsideLink.scss';

const OutsideLink = ({ href, outerClassName, children }) => (
  <a
    href={href}
    className={`link ${outerClassName}`}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

OutsideLink.defaultProps = {
  outerClassName: null,
};

OutsideLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  outerClassName: PropTypes.string,
};

export { OutsideLink };
