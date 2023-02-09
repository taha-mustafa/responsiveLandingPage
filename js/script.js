// Setting The Basic DOM Elements
let time = document.getElementById("time"),
    welcoming = document.getElementById("welcoming"),
    myName = document.getElementById("myName"),
    lookFor = document.getElementById("lookFor");

// A Function for Time
function showingTheTime() {
    let date = new Date();
    let hours = date.getHours();
    let minitues = date.getMinutes();
    let seconds = date.getSeconds();

    // Setting If it is AM Or PM
    let amOrPm = hours >= 12 ? "PM" : "AM";

    // Formatting The 12hr
    hours = hours % 12 || 12;

    // The Output for Time
    time.innerHTML = `${hours}<span>:</span>${zero(minitues)}<span>:</span>${zero(seconds)}${amOrPm}`;

    // Calling That time
    setTimeout(showingTheTime, 1000);
}



// Setting a function to add Zero when its needed
function zero(num) {
    return (parseInt(num, 10) < 10 ? "0" : "") +num;
}

// Setting The Background
function background() {
    let date = new Date();
    let hours = date.getHours();

    if (hours < 12) {
        document.querySelector(".time-area").style.backgroundImage = "url('../images/morning.jpg')";
        document.querySelector(".time-area").style.backgroundSize = "cover";
        document.querySelector(".time-area").style.backgroundRepeat = "no-repeat";
        welcoming.textContent = "Good Morning";
    } else if (hours < 18) {
        document.querySelector(".time-area").style.backgroundImage = "url('../images/afternoon.jpg')";
        document.querySelector(".time-area").style.backgroundSize = "cover";
        document.querySelector(".time-area").style.backgroundRepeat = "no-repeat";
        welcoming.textContent = "Good Aternoon";
        document.body.style.color = "#fff";
    } else {
        document.querySelector(".time-area").style.backgroundImage = "url('../images/evening.jpg')";
        document.querySelector(".time-area").style.backgroundSize = "cover";
        document.querySelector(".time-area").style.backgroundRepeat = "no-repeat";
        welcoming.textContent = "Good Evening";
        document.body.style.color = "#fff";
    }
}


// Setting a name in the Landing page
function nameAndLookingFor(ele) {
    // For Setting Your Name
    localStorage.getItem("myName") === null?
    myName.textContent = `[Enter Your Name]` :
    myName.textContent = localStorage.getItem('myName');

    // For Setting what are you looking for
    localStorage.getItem("lookFor") === null?
    lookFor.textContent = `[Enter Your Motivation]` :
    lookFor.textContent = localStorage.getItem('lookFor');
}

// Function For Setting Your Name
function setName(ele) {
    if (ele.type === 'keypress' && ele.which == 13 || ele.keyCode == 13) {
        localStorage.setItem('myName', ele.target.innerText);
        myName.blur();
    } else {
        localStorage.setItem('myName', ele.target.innerText);
    }
}

// Function For Setting Your daily goal 
function lookingFor(ele) {
    if (ele.type === 'keypress' && ele.which == 13 || ele.keyCode == 13) {
        localStorage.setItem('lookFor', ele.target.innerText);
        lookFor.blur();
    } else {
        localStorage.setItem('lookFor', ele.target.innerText);
    }
}

// Event Listener For Setting Name and daily Goal OR Motivation
myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);
lookFor.addEventListener('keypress', lookingFor);
lookFor.addEventListener('blur', lookingFor);

// Calling The Functions
showingTheTime();
background();
nameAndLookingFor();