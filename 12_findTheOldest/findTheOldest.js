const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const ages = (people.map(person => {
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return currentYear - person.yearOfBirth;
        }
    }));
    const maxAge = ages.reduce((x, y) => Math.max(x, y));
    const maxAgeInd = ages.indexOf(maxAge);
    return people[maxAgeInd];
};

// Do not edit below this line
module.exports = findTheOldest;
