const findTheOldest = function(people) {
    return people.reduce((currOldest, person) => {
        if('yearOfDeath' in person){
            let currAge = person.yearOfDeath - person.yearOfBirth;
            let oldestAge = currOldest.yearOfDeath - currOldest.yearOfBirth;
            if(currAge > oldestAge){
                return person;
            }else{
                return currOldest;
            }
        }else{
            person.yearOfDeath = new Date().getFullYear();
            let currAge = person.yearOfDeath - person.yearOfBirth;
            let oldestAge = currOldest.yearOfDeath - currOldest.yearOfBirth;
            if(currAge > oldestAge){
                return person;
            }else{
                return currOldest;
            }
        }
    }, {
        yearOfBirth: new Date().getFullYear(),
        yearOfDeath: new Date().getFullYear(),
    })
};

// Do not edit below this line
module.exports = findTheOldest;
