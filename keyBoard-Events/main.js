
let ball = document.getElementById('float-circle');

// Write your code below
function up() {
  ball.style.bottom = '250px'; //Raises the bottom position of the ball to 250px
}

function down() {
  ball.style.bottom = '50px'; //Lowers the bottom position of the ball to 50px
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);