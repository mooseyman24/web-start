var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/spicy.jpg') {
	  myImage.setAttribute ('src','images/face.jpg');
	} else {
	  myImage.setAttribute ('src','images/spicy.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + ', almost as spicy as Ainsley!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ', almost as spicy as Ainsley!';
}

myButton.onclick = function() {
	setUserName();
}
