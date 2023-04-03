
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


/// ========login 
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
          sessionStorage.setItem('user', JSON.stringify(foundUser));
          let modal = document.getElementById("model-login")
          $(modal).modal('hide');

            // Remove sign-in functionality
          let dropdownToggle = document.querySelector('.dropdown-toggle');
          dropdownToggle.classList.add('no-dropdown');

          // Remove login modal
          modal.remove();


          dropdownToggle.classList.remove('no-dropdown');
          let profileItem = document.querySelector('.dropdown-item.profile');
          const profileName = foundUser.username;
          profileItem.textContent = profileName;
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


// Code to use with cart
// if (sessionStorage.getItem('user')) {
// } else {
// }

document.querySelector('.dropdown-item.logout').addEventListener('click', function() {
  sessionStorage.removeItem('user');
  location.reload();
});




const logout = () => {
document.querySelector('.dropdown-item.logout').addEventListener('click', function() {
  sessionStorage.removeItem('user');
  location.reload();
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
  


