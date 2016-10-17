class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  greet() {
    console.log("Hey, my name is " + this.name + " and my favourite color is " + this.favoriteColor);
  }
}

export default Person;
