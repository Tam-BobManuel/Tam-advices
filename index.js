 
 console.log('======== What are you doing here you peaky developer 👀 ========')


const resDiv = document.querySelector('#results');
const resId = document.querySelector('#identify');
const resBtn = document.querySelector('#getData');
const resHead = document.querySelector('#heading');
const resFoot = document.querySelector('#datentime');
 
var userNam = prompt('Please, what is your name');

if (userNam == 'Egi') {
  alert('Forget the advice, your future husband is Tam');
}
if(userNam == 'Akor'){
  alert('I can see your future, your husband is Tam');
}


if (userNam == null) {
  var userNam = 'Anon';
}else if (userNam == ''){
  var userNam = 'Anonymous';
}

var myDate = new Date();
var hrs = myDate.getHours();

var greetings;

if (hrs < 12){
    greetings = 'Good Morning';
}else if(hrs >= 12 && hrs <= 17){
    greetings = 'Good Afternoon';
}else if(hrs >= 17 && hrs <= 20){
    greetings = 'Good Evening';
}else if(hrs >= 20 && hrs <= 24){
    greetings = 'Having trouble sleeping? 😴';
}

resHead.innerHTML = 'Welcome '+userNam+', '+greetings;
 
resBtn.addEventListener('click', () => {
  getAdvice();
});
 
window.onload = () => {
  getAdvice();
};
 
 
 
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



































































































































































































































































