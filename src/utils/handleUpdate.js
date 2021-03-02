const apiURL = process.env.REACT_APP_API_URL;

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && user.token ? { Authorization: `Bearer ${user.token}` } : {};
};

function handleUpdate(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${apiURL}/users/${user.id}`, requestOptions).catch((err) => {
    console.log(err);
  });
}

export default handleUpdate;
