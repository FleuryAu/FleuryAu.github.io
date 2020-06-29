let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lavieingenieur.png') {
        myImage.setAttribute('src', 'images/ingenieur.png')
    } else {
        myImage.setAttribute('src', 'images/lavieingenieur.png')
    }
})

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.")
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Wahoo!!!' + myName + ", découvre l'ingénieur ";

}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('nom');
    myHeading.textContent = 'Wahoo!!!' + storeName + ", découvre l'ingénieur ";
}

myButton.addEventListener('click', function() {
    setUserName();
});