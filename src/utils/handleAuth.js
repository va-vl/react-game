import { API_URL } from '../constants/constants';

const handleSignOut = () => {
  localStorage.removeItem('user');
  document.location.reload(true);
};

function handleSignIn(authData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),
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
    .then((user) => {
      localStorage.setItem('user', user);

      return { ok: true };
    })
    .catch(({ message }) => ({
      ok: false,
      payload: message,
    }));
}

function handleSignUp(authData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),
  };

  return fetch(`${API_URL}/users/register`, requestOptions)
    .then((res) => {
      if (res.ok === false) {
        throw new Error(res.statusText);
      }

      return { ok: true };
    })
    .catch((err) => ({
      ok: false,
      payload: err.message,
    }));
}

export { handleSignIn, handleSignOut, handleSignUp };
