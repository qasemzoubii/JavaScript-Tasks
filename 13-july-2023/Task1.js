let names = ['Qasem' , 'Omar' , 'Amrabat','Mohammed']
let ages = ['23 years old' , '22 years old' , '20 years old','23 years old']
let container = document.createElement ('div');
document.body.appendChild(container);
container.style.textAlign='center';

function Cards(name,ages)
{
let card = document.createElement('div');
let title = document.createElement('h2');
let age= document.createElement('p');
let img= document.createElement('img');

let head = document.createTextNode (name);
let ageContent = document.createTextNode (ages);
img.src = '/13-july-2023/img.png';
title.appendChild(head);
age.appendChild(ageContent);

card.style.width = '200px';
card.style.background = '#444';
card.style.padding = '10px';
card.style.margin = '5px';
// card.style.display = 'inline-block';


img.style.width = '100%';
card.appendChild(title);
card.appendChild(age);
card.appendChild(img);
container.appendChild(card);

}

for (i=0 ; i<4 ; i++){
    Cards(names[i],ages[i]);
}