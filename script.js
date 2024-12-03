// Запрашиваем имя, ID и пароль через prompt
let name = prompt("Введите ваше имя:");
let spaceId = prompt("Введите ваш Space ID:");
let spacePassword = prompt("Введите ваш Space Password:");

// Создаем объект с данными
let userData = {
  name: name,
  ID: spaceId,
  password: spacePassword
};

// Выводим объект в консоль
console.log(userData);
