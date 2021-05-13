const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 5000,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;

    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.getFullName());
// normalPerson.chargeBill(170);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 10000,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000);
heroChargeBill(2000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);


const friendlyPerson = {
    firstName: 'Joero',
    lastName: 'Abram',
    salary: 15000,
}

const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendChargeBill(3000);
console.log(friendlyPerson.salary);


const richPerson = {
    firstName: 'Joero',
    lastName: 'Abram',
    salary: 30000,
}

normalPerson.chargeBill.call(richPerson,5000)
console.log(richPerson.salary);


const poorPerson = {
    firstName: 'Joero',
    lastName: 'Abram',
    salary: 35000,
}

normalPerson.chargeBill.apply(poorPerson,[3000]);
console.log(poorPerson.salary);