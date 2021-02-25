import API_URL from '../constants/api';

const handleSignOut = () => {
  localStorage.removeItem('user');
  document.location.reload(true);
};

function handleSignIn(userName, userPassword, routerHistory) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, userPassword }),
  };

  return fetch(`${API_URL}/users/authenticate`, requestOptions)
    .then((res) => {
      if (res.ok === false) {
        if (res.status === 401) {
          handleSignOut();
        }

        throw new Error(res.statusText);
      }

      return res.text();
    })
    .then((text) => JSON.parse(text))
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      routerHistory.push('/');
      return { isLoginSuccessful: true };
    })
    .catch((err) => ({
      isLoginSuccessful: false,
      message: err.message,
    }));
}

function handleSignUp(user, routerHistory) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${API_URL}/users/register`, requestOptions)
    .then((res) => {
      if (res.ok === false) {
        throw new Error(res.statusText);
      }

      routerHistory.push('/signin');

      return { isSignUpSuccessful: true };
    })
    .catch((err) => ({
      isSignUpSuccessful: false,
      message: err.message,
    }));
}

export { handleSignIn, handleSignOut, handleSignUp };
