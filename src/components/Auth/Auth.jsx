/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

class Auth extends Component {
  constructor(props) {
    super(props);

    const { defaultName } = this.props;

    this.state = {
      userName: defaultName,
    };

    this.handleTextChange = this._handleTextChange.bind(this);
    this.submitInputValue = this._submitInputValue.bind(this);
  }

  _submitInputValue() {
    const { nameSubmit } = this.props;
    const { userName } = this.state;

    nameSubmit(userName);
  }

  _handleTextChange(event) {
    const {
      target: { value },
    } = event;

    this.setState({ userName: value });
  }

  render() {
    const { userName } = this.state;

    return (
      <>
        <Typography variant="h3">Hi, what is your name?</Typography>
        <form>
          <TextField
            value={userName}
            onChange={this.handleTextChange}
            label="Name"
          />
          <div>
            <Button onClick={this.submitInputValue}>Submit</Button>
          </div>
        </form>
      </>
    );
  }
}

export default Auth;
