class Person{
    constructor(name, grade, email, tjjf_number=NaN, expiry_date='1/1/2024'){
    this.name = name;
    this.grade = grade;
    this.email = email;
    this.tjjf_number = tjjf_number;
    this.license_expiry = new Date(expiry_date);
    }

    checkTjjfNum() {
        return !isNaN(this.tjjf_number)
    }
}

const grades = ['Novice', 'Yellow', 'Orange', 'Green', 'Purple', 'Light Blue', 'Dark Blue', 'Brown', 'Dan I', 'Dan II'];
const session_types = ['Term', 'Out of Term', 'Greens+', 'Grading','Freshers']
const cecilia = new Person('cecilia', 'brown', 'ceciliacatcal@gmail.com',26832)

// for (let i=0; i<session_types.length; i++) {
//     var session_type = session_types[i]
//     console.log(session_type);
// };

// grades.forEach(function(grade){
//     console.log(grade);
// });

document.getElementById('demo').innerHTML = 'hello there'

console.log(document.getElementById('list_of_attendees'))