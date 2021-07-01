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
document.write(firstname +' '+ lastname);


}