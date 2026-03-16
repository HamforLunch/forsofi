let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let noClicks = 0;
let yesScale = 1;

/* YES BUTTON CLICK */
yesBtn.onclick = function(){

    launchConfetti();
    showSlide("yesSlide");

};


/* NO BUTTON CLICK */
noBtn.onclick = function(){

    noClicks++;

    /* make yes button grow */
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    /* if too many no clicks */
    if(noClicks >= 7){
        showSlide("sadSlide");
    }

};


/* make NO button run away */
document.addEventListener("mousemove", function(e){

    let rect = noBtn.getBoundingClientRect();

    let distanceX = e.clientX - (rect.left + rect.width/2);
    let distanceY = e.clientY - (rect.top + rect.height/2);

    let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

    if(distance < 120){

        let moveX = (Math.random() - 0.5) * 200;
        let moveY = (Math.random() - 0.5) * 200;

        noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    }

});


/* change slide */
function showSlide(id){

    document.querySelectorAll(".slide").forEach(slide=>{
        slide.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}


/* confetti animation */
function launchConfetti(){

    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

}