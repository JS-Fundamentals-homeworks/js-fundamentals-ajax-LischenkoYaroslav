// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const getUserButton = document.querySelector("#getUserButton");
const userNameInput = document.querySelector("#userNameInput");
const userCity = document.querySelector("#userCity");

const usersUrl = "https://jsonplaceholder.typicode.com/users";

function getUserCity() {
  fetch(usersUrl)
    .then((response) => response.json())
    .then((users) => {
      const user = users.find((user) => user.name === userNameInput.value);
      if (user) {
        userCity.textContent = user.address.city;
      } else {
        console.log(user + " User not found");
      }
    });
}

getUserButton.addEventListener("click", getUserCity);
