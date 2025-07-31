// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("An error occurred");
//   }, 1000);
// });

// promise.catch((result) => {
//   console.log(result);
// });

// promise1
//   .then(() => promise2)
//   .then(() => promise3)
//   .then(() => console.log("All done"))
//   .catch(() => console.log("Error caught"));

// function fetchData(callback) {
//   setTimeout(() => {
//     let data = "Server data";
//     callback(data);
//   }, 1000);
// }

// fetchData((data) => console.log(data));

// console.log("Start");

// setTimeout(() => {
//   console.log("Task completed");
// }, 1000);

// console.log("End");

// let promise = new Promise((resolve) => {
//   resolve("Success!");
// });

// promise
//   .then((result) => {
//     console.log(result);
//     return result;
//   })
//   .then((result) => {
//     console.log(result + " Again");
//   });

// function car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// let myCar = new car("Tesla", "Model S");
// console.log(myCar.make);

// let person = {
//   birthYear: 1995,
//   getAge: function(currentYear) {
//     return currentYear - this.birthYear;
//   }
// };
// console.log(person.getAge(2024));

// let animal = {
//   legs: 4,
//   describe() {
//     console.log(`This animal has ${this.legs} legs.`);
//   }
// };

// let fish = { legs: 0 };
// animal.describe.call(fish);

// let dog = {
//   name: "Buddy",
//   sound: function() {
//     console.log(this.name + " says woof!");
//   }
// };

// let soundFunc = dog.sound.bind({ name: "Max" });
// soundFunc();
