let findTheOldest = function(people) {

    var oldest_person = {};

    var oldest_age = 0;

    var i;

    var age;

    for (i=0; i<people.length; i++){
        if (people[i].yearOfDeath == null){
            age = (new Date()).getFullYear() - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if (age > oldest_age){
            oldest_age = age;
            oldest_person = people[i];
        }
    }

    return oldest_person;

}

module.exports = findTheOldest
