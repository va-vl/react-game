// array in local storage for registered users
const users = JSON.parse(localStorage.getItem('users')) || [];

export default function fakeBackend() {
  const realFetch = window.fetch;

  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          // get parameters from post request
          const params = JSON.parse(opts.body);

          // find if any user matches login credentials
          const filteredUsers = users.filter(
            (user) =>
              user.userName === params.userName &&
              user.userPassword === params.userPassword,
          );

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            const user = filteredUsers[0];
            const responseJson = {
              id: user.id,
              userName: user.userName,
              userEmail: user.userEmail,
              token: 'fake-jwt-token',
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            });
          } else {
            // else return error
            reject(new Error('Username or password is incorrect'));
          }

          return;
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            // find user by id in users array
            const urlParts = url.split('/');
            const id = parseInt(urlParts[urlParts.length - 1], 10);
            const matchedUsers = users.filter((user) => user.id === id);
            const user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            resolve({ ok: true, text: () => JSON.stringify(user) });
          } else {
            // return 401 not authorised if token is null or invalid
            reject(new Error('Unauthorised'));
          }

          return;
        }

        // register user
        if (url.endsWith('/users/register') && opts.method === 'POST') {
          // get new user object from post body
          const newUser = JSON.parse(opts.body);

          // validation
          const duplicateUser = users.filter(
            (user) => user.userName === newUser.userName,
          ).length;
          if (duplicateUser) {
            reject(
              new Error(`Username "${newUser.userName}" is already taken`),
            );
            return;
          }

          // save new user
          newUser.id = users.length
            ? Math.max(...users.map((user) => user.id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));
      }, 500);
    });
  };
}
