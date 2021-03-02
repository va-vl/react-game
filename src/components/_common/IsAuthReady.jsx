import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { authSelector } from '../../store/selectors';

function IsAuthReady({ children }) {
  const auth = useSelector(authSelector);

  if (!isLoaded(auth)) {
    return <div>Now loading</div>;
  }

  return children;
}

export default IsAuthReady;
