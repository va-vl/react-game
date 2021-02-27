const apiURL = process.env.REACT_APP_API_URL;

function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        logout();
        document.location.reload(true);
      }

      const error = data?.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${apiURL}/users/${user.id}`, requestOptions).then(
    handleResponse,
  );
}

export default update;
