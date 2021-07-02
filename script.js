'use strict'
document.write('this is script');

let answer = prompt('would you like to join our email list?');


if (answer === 'yes') {
    let emailAddress = prompt('Enter your email address below');
    // sayHello(); 
    let firstname = prompt('hello, what is your first name?');
    let lastname = prompt('What is your lastname?');
    console.log(firstname + ' ' + lastname);
}


//The user get's prompted with a question and they input a
// yes or no answer that may prompt them again based on the
// first answer. 



function sayHello() {
    let firstname = prompt('hello, what is your first name?');
    let lastname = prompt('What is your lastname?');
    console.log(firstname + ' ' + lastname);
    document.write(firstname + ' ' + lastname);


}



//ask the question, how many feet in a mile? keep asking until 5,280 
//is entered. 

function howManyFeet() {
    let feetMiles = prompt('How many feet in a mile?');
    while (feetMiles !== '5,280') {
        feetMiles = prompt('That is not correct. Try again. How many feet in a mile?');

    }



    //have a shoe question prompt that writes the number of shoes in pictures on the page 

    let shoeCounter = prompt('How many pairs of running shoes do you own?');

    for (let i = 0; i < shoeCounter; i++) {
        document.write('<img class="shoesPic" src="pairshoes.jpg"/>');
    }
}




