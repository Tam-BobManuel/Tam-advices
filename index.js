 
 console.log('======== What are you doing here you peaky developer 👀 ========')

    // Rules for formatting the code are;
    // 1) Indentation for comments are done by pressing tab 3 times 


    // here I declared my constants mainly used to grab HTML elements 

const resDiv = document.querySelector('#results');
const resId = document.querySelector('#identify');
const resBtn = document.querySelector('#getData');
const resHead = document.querySelector('#heading');
const resFoot = document.querySelector('#datentime');
const dividerDiv = document.querySelector('.division_div')

    // here I collect the user name and make sure the first letter is capitalised
 
var userNam = prompt('Please, what is your name');

var userNamFirstChar = userNam.slice(0,1);

var upperCaseUserNamFirstChar = userNamFirstChar.toUpperCase();

var restOfUserNam = userNam.slice(1,userNam.length);

var userNam = upperCaseUserNamFirstChar + restOfUserNam;


    // Here I added some easter eggs for my friends 

if (userNam == 'Egi') {
  alert('Forget the advice, your future husband is Tam');
}
if(userNam == 'Akor'){
  alert('I can see your future, your husband is Tam');
}
if(userNam == 'Ebuka'){
  alert('My python dev, how are you?');
}
if(userNam == 'David'){
  alert('My gee thanks for using my product');
}
if(userNam == 'Wisdom'){
  alert('Ashawo');
}
if(userNam == 'Meekness'){
  alert('Come and learn');
}
if(userNam == 'Boss'){
  alert('Thanks for teaching me')
}
if(userNam == 'Preye'){
  alert('Preye, how are you today');
}
if(userNam == 'Izu'){
  alert('Welcome my G')
}
      // Here I made default user names for the user

if (userNam == null) {
  var userNam = 'Anon';
}else if (userNam == ''){
  var userNam = 'Anonymous';
}

      // here I try to determine the user's time in order to know how to greet them

var myDate = new Date();
var hrs = myDate.getHours();

      // here I declare the empty variable of gtreeting which will be fixed based on the value of variable "hrs"

var greetings;

if (hrs < 12){
    greetings = 'Good Morning';
}else if(hrs >= 12 && hrs <= 17){
    greetings = 'Good Afternoon, do not forget to stay hydrated';
}else if(hrs >= 17 && hrs <= 20){
    greetings = 'Good Evening';
}else if(hrs >= 20 && hrs <= 24){
    greetings = 'Having trouble sleeping? 😴';
}

      // A welcome message and greeting to thhe user

resHead.innerHTML = 'Hello '+userNam+', '+greetings;

      // Here I grab an advice when the user loads the page or clicks on the get advice button
 
resBtn.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

dividerDiv.addEventListener('doubleclick', () => {
  alert('please use the "click for advice button"');
});

      // This is where I connected the API of my web app
 
function getAdvice() {
 
  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resId.innerHTML = `<h4>Your Advice #${Adviceobj.id}</h4>`;
    resDiv.innerHTML = `<h2 class='resDiv'>"${Adviceobj.advice}"</h2>`;
  })
  .catch(error => {
    console.log(error);
  });
 
}