/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function Button(props) {
  // Render an anchor tag
  let button = (
    <a href={props.href} onClick={props.onClick}>
      {props.title}
    </a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return <div className="button">{button}</div>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Button;
