window.addEventListener("keydown", function(e){
    console.log("Hello")
    document.getElementById("key").innerHTML = e.key;
    document.getElementById("key-code").innerHTML = e.keyCode;
    document.getElementById("event-code").innerHTML = e.code;
    if(e.key === 65)
    {
        document.getElementById('yourAudioTag').play();
    }
})

fetch('https://api.jokes.one')
  .then(response => response.json())
  .then(data => console.log(data));