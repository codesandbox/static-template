const person = {
  firstName: "Tu",
  lastName: "Pham",
  birthYear: 1994,
  job: "IT Engineering",
  calcAge: () => {
    return 2021 - this.birthYear;
  }
};

console.log(person.calcAge());
