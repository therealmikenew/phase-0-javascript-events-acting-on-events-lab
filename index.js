// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#7FFF00';

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft ();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
    
});



    


