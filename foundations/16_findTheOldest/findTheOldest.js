const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const yearsLived = people
    .map((person) => ({
      name: person.name,
      years:
        (person.yearOfDeath ? person.yearOfDeath : currentYear) -
        person.yearOfBirth,
    }))
    .sort((a, b) => b.years - a.years);
  console.log(yearsLived);
  return people.find((person) => person.name == yearsLived[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
