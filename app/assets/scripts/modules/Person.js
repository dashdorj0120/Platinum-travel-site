// function Person(fullName, favoriteColor) {
//   this.name = fullName;
//   this.favColor = favoriteColor;
//   this.greet = function() {
//     console.log(
//       "Hey its me " + this.name + " my favorite color " + this.favColor
//     );
//   };
// }

class Person {
  constructor(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
  }
  greet() {
    console.log(
      "Hey its me " + this.name + " my favorite color " + this.favoriteColor
    );
  }
}

export default Person;
