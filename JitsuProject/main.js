
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

document.getElementById('demo').innerHTML = 'hello there';

const li = document.querySelectorAll('li');

const btn = document.querySelector('#button');
const new_user_btn = document.querySelector('#button2');
const new_user_name = document.querySelector('#add_new_attendee');
const demo = document.querySelector('#demo');
const grade_new_member = document.querySelector('#grade_new_member');

new_user_btn.addEventListener('click',(e) =>{
    username = new_user_name.value
    grade = grade_new_member.value
    if (username === '') {
        demo.classList.add('error');
        demo.innerHTML = 'Enter a name';
        setTimeout(() => demo.classList.remove('error'),3000);

    } else {
        demo.innerHTML = `${username} : ${grade}`;
    }
})

btn.addEventListener('click',(e) =>{
    demo.innerHTML = 'You clicked'
})

const selected = document.querySelector('#list_of_attendees');


//dyanamically populate attendees option from test_array
//TO DO: fetch from database
const test_array = {"Dan II": [{"name": "Daniel Storer"}], "Dan I": [{"name": "Chris Henderson"}, {"name": "Chris Dundas"}], "Brown": [{"name": "Matt Clarricoates"}, {"name": "Emma Wilson"}, {"name": "Poppy Carr"}, {"name": "James Young"}, {"name": "Cecilia Cal"}, {"name": "Emilio Aldorino"}, {"name": "Thibaut Putelat"}], "Dark Blue": [{"name": "Tom Moran"}, {"name": "Matt Maynes"}, {"name": "Tim Usmanov"}], "Light Blue": [{"name": "Charlotte Sloan"}, {"name": "Becca Douthwaite"}, {"name": "Ansel Burn"}, {"name": "Sam Casford"}, {"name": "Bee Martin"}], "Purple": [{"name": "Allegra Jaffe"}, {"name": "Doug Day"}, {"name": "Jack Walton"}, {"name": "Arianna Koffler-Sluijter"}], "Green": [{"name": "Tom Duffy"}, {"name": "Paula Blanco-Rios"}, {"name": "Louis Kirby"}, {"name": "Maurice Colombe"}, {"name": "Anna Peters"}, {"name": "Jake Broughton"}, {"name": "Bori Kalmar"}, {"name": "Galih Suwito"}], "Orange": [{"name": "Martyn Davies"}, {"name": "Eugene Ho"}, {"name": "Nikolay Petrov"}, {"name": "Alice Corran"}, {"name": "Praveen Bharadwaj"}, {"name": "Ivan Ivanov"}, {"name": "Yifei Shen"}, {"name": "Daniel Petrov"}, {"name": "Nathan De Carle"}, {"name": "Mary-Beth Lascurain"}], "Yellow": [{"name": "Justin Wilkinson"}, {"name": "Denzel Ofiaeli"}, {"name": "Ramim Rahman"}, {"name": "Felipe Gill Borrallo"}, {"name": "Joe Smith"}, {"name": "Lana Howell"}, {"name": "Roksolana Ivanchuk"}, {"name": "Lea Schubert"}, {"name": "Jiaping Cui"}, {"name": "Stephen Lezak"}, {"name": "Manu Mueller"}, {"name": "Wei Wen Hao (Edward)"}, {"name": "Ria Patel"}, {"name": "Alex Letchford"}, {"name": "Kai Sun"}, {"name": "Eve Stewart"}], "Novice": [{"name": "Becky Canning"}, {"name": "River Wilson"}, {"name": "Andriy Byelka"}, {"name": "Gemma Siddall"}, {"name": "Michelle Crees"}, {"name": "Javier Rodrigues"}, {"name": "Seowon Jung"}, {"name": "Juyeon Heo"}, {"name": "Patti Sun"}, {"name": "Alexander Hodson"}, {"name": "Naomi van Rijn"}, {"name": "Adam Gass"}, {"name": "Chloe Ou"}, {"name": "Johanneke Iza De Laat"}, {"name": "Preslav"}, {"name": "Janneke"}]};
$(document).ready(function() {
    var select = $('#list_of_attendees');
    for (const item in test_array){
        opt_group = $('<optgroup label="' + item + '" />')
        for (const person in test_array[item]) {
            opt_name = test_array[item][person]['name'];
            $('<option />').html(opt_name).appendTo(opt_group);
        };
        opt_group.appendTo(select);
    }
});

// avoid having to hold down ctrl/cmd to multiselect
$("#list_of_attendees").mousedown(function(e){
    e.preventDefault();

    var select = this;
    var scroll = select .scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(function(){select.scrollTop = scroll;}, 0);

    $(select ).focus();
}).mousemove(function(e){e.preventDefault()});