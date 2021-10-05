const landingPage = document.getElementById('landing-page');
const generator = document.getElementById('generator');
const keyStroke = document.getElementById('keycode');

const keycode = (event) => {
let key = event.key;
let code = event.code;
let which = event.which;
keyStroke.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventCode").innerHTML= code;
document.getElementById("eventWhich").innerHTML= which;
generator.classList.remove("show");
landingPage.remove()
}