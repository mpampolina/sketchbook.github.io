var sideMenu = document.getElementById("sideMenu");
var slideLeft = document.getElementById("slideLeft")
var slideRight = document.getElementById("slideRight")


sideMenu.addEventListener("mouseenter", menuPopout);
sideMenu.addEventListener("mouseleave", menuPopback);
slideRight.addEventListener("click", moveSlide);
slideLeft.addEventListener("click", moveSlide)

function menuPopout(event) {
    let navigation = document.querySelector("#navigation");
    let title = document.querySelector("#titleText");
    navigation.style.display = "block";
    title.style.display = "none";
}

function menuPopback(event) {
    let navigation = document.querySelector("#navigation");
    let title = document.querySelector("#titleText");
    navigation.style.display = "none";
    title.style.display = "block";
}

function moveSlide(event) {
    let slideImages = Array.from(document.getElementsByClassName("slideImage"))
    
    // find the index of the current image
    let currentBlockIndex= slideImages.findIndex(function(image){
        if (image.style.display == "block") {
            return image
        }
    })

    // move forward the slide deck
    if (event.target.id == "slideRight") {
        let nextBlock;
        if ((currentBlockIndex + 1) >= slideImages.length){
            nextBlock = slideImages[0]
        } else {
            nextBlock = slideImages[currentBlockIndex + 1]
        }   
        slideImages.forEach(function(image){
            if (image == nextBlock) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        })

    // move backward the slide deck
    } else if (event.target.id == "slideLeft") {
        let prevBlock;
        if ((currentBlockIndex - 1) < 0) {
            prevBlock = slideImages[slideImages.length - 1];
        } else {
            prevBlock = slideImages[currentBlockIndex - 1];
        }
        slideImages.forEach(function(image){
            if (image == prevBlock){
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        })
    }
    
}