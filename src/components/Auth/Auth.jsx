import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const Auth = ({
  userName,
  setUserName,
}) => (
  <>
    <Typography variant="h3">Hi, what is your name?</Typography>
    <form>
      <TextField
        value={userName}
        onChange={setUserName}
        label="Name"
      />
      <div>
        <Button>Submit</Button>
        <Button>Continue without name</Button>
      </div>
    </form>
  </>
);

Auth.defaultProps = {
  userName: '',
};

Auth.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func.isRequired,
};

export default Auth;
