const findTheOldest = function(people) {
    const ageOrder = [...people].sort((a, b) => {
        const aDeath = a.yearOfDeath !== undefined ? a.yearOfDeath : new Date().getFullYear();
        const bDeath = b.yearOfDeath !== undefined ? b.yearOfDeath : new Date().getFullYear();
        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;
        return bAge - aAge;
    });
    return ageOrder[0];
};

// Do not edit below this line
module.exports = findTheOldest;
