const apiURL = process.env.REACT_APP_API_URL;

function handleUpdate(data) {
  const user = JSON.parse(localStorage.getItem('user'));
  const authHeader =
    user && user.token ? { Authorization: `Bearer ${user.token}` } : {};

  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  return fetch(`${apiURL}/users/${user.id}`, requestOptions).catch((err) => {
    console.log(err);
  });
}

export default handleUpdate;
