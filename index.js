// Your code here
// Your code here
const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";
dodger.style.left = "100px";



//move dodger to the left 
document.addEventListener("keydown", function (event) { 
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }

    
  });

function moveDodgerLeft(){
   
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
      
}

//move dodger to the right

document.addEventListener("keydown", function (event) { 
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
});

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360){ // Assuming the container width is 400px and dodger width is 40px
        dodger.style.left = `${left + 1}px`;
    }
}


