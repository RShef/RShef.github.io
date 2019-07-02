var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bear.jpeg') {
      myImage.setAttribute ('src','images/bear2.jpeg');
    } else {
      myImage.setAttribute ('src','images/bear.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    if (myName === 'null'){myName = ','}
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hey, ' + myName + ' thanks for visiting again.';
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey, ' + storedName + ' thanks for visiting again.';
  }
  myButton.onclick = function() {
    setUserName();
  }