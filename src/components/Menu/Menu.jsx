import React from 'react';
import { Typography } from '@material-ui/core';

const Menu = (props) => {
  console.log(props);
  const a = 'This is a menu';

  return <Typography>{a}</Typography>;
};

export default Menu;
