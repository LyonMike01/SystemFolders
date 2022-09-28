/** W3school examples on functions**/

// this key word and function in a function

var myName = {
    firstName: "Lyon",
    lastName: "Mike",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(myName.fullName());


// this key word and function in a function

const person = {
    
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Lyon",
    lastName: "Mike"
}

const person2 = {
    firstName: "Ahmed",
    lastName: "Beji"
}
person.fullName.call(person1);


// this key word and function in a function

const person = {
    
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const person1 = {
    firstName: "Lyon",
    lastName: "Mike"
}

person.fullName.call(person1, "Minna", "Nigeria");



