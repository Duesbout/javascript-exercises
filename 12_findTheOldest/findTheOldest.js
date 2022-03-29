const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();

  return people.reduce((old, person) => {
    const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
    return age > old.age ? { person, age } : old;
  }, { person: null, age: 0 }).person;
}



// Do not edit below this line
module.exports = findTheOldest;
