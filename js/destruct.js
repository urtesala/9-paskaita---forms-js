"use strict";
console.log("destruct.js");

//^ object destrukturizacija
//              0       1      2       3
const user = ["James", 45, "London", true];

function getUser() {
  return ["James", 45, "London", true];
}

// const username = user[0];
// const age = user[1];
// const town = user[2];
// const hasCar = user[3];

//^ object destrukturizacija
const [, , town] = getUser();

// console.log('username ===', username);
// console.log('age ===', age);
// console.log('town ===', town);
// console.log('hasCar ===', hasCar);
// console.log(username, age, town, hasCar);

function getUserObj() {
  return {
    title: "Mr",
    town: "Vilnius",
    isMarried: true,
  };
}

const user2 = {
  title: "Mr",
  town: "Vilnius",
  isMarried: true,
};
console.log("user2 ===", user2);

// const town = user2.town;
// const title = user2.title;

// const { town, title } = user2;

// console.log('town ===', town);
// console.log('title ===', title);
// console.log('town ===', typeof town);
