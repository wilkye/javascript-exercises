const findTheOldest = function (arr) {
    if (!arr || arr.length === 0) return undefined;

    const getAge = person => {
        const birth = person.yearOfBirth;
        const death = (person.yearOfDeath === undefined) ? new Date().getFullYear() : person.yearOfDeath;
        return death - birth;
    };

    let finalIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (getAge(arr[i]) > getAge(arr[finalIndex])) {
            finalIndex = i;
        }
    }

    return arr[finalIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
