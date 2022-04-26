function createHeart(){
    const heart = document.createElement('div');

    heart.classList.add("heart");

    heart.innerText = "ahbuieb";

    document.appendChild(heart);
}

setInterval(createHeart,1000);