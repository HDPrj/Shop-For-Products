
// const login = event => {
//     console.log(event);
//     axios.get('./js/login.json')
//         .then(function (response) {
//             // handle success
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .finally(function () {
//             // always executed
//         });
// }

let dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.classList.add('no-dropdown');

const login = event => {
  event.preventDefault();

  const username = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  axios.get('./js/login.json')
    .then(function (response) {
      const users = response.data.users;
      if (users) {
        const foundUser = users.find(user => user.username === username && user.password === password);

        if (foundUser) {
          alert('Login successful!');
          let modal = document.getElementById("model-login")
          $(modal).modal('hide');
          dropdownToggle.classList.remove('no-dropdown');
        } else {
          alert('Incorrect username or password');
        }
      } else {
        alert('No users found in login data');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};


// const signup = event => {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     axios.get('./js/login.json')
//       .then(function (response) {
//         const users = response.data.users;
//         if (users) {
//           const userExists = users.find(user => user.username === username);
  
//           if (userExists) {
//             alert('User already exists');
//           } else {
//             axios.post('./js/login.json', { username, password })
//               .then(function (response) {
//                 alert('User signed up successfully!');
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
//           }
//         } else {
//           alert('No users found in login data');
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
  


