 async function start () {
    const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
    const data = await response.json();
    createBreedList(data.message);
}

start();

function createBreedList(breedList){
    document.getElementById("breed").innerHTML = 
    `       <select onchange="loadByBreed(this.value)">
                <option>Choose a dog breed</option>
                ${Object.keys(breedList).map(function(breed){
                    return `<option> ${breed} </option>`
                }).join('')}
            </select>
            
     `
}

async function loadByBreed(breed) {
    if(breed != "Choose a dog breed") {
       const response = await fetch( `https://dog.ceo/api/breed/${breed}/images`)
       const data = await response.json();
       createSlideShow(data.message);
    }
}


function createSlideShow(images){
    let currPos = 0;
    document.getElementById('slide').innerHTML = 
    ` <div class="slideshow" style="background-image : url('${images[0]}')"></div>
      <div class="slideshow" style="background-image : url('${images[1]}')"></div>`
      currPos = currPos + 2;
      setInterval(nextSlide , 3000)

      function nextSlide(){
          document.getElementById('slide').insertAdjacentElement("beforeend", `<div class="slideshow" style="background-image : url('${images[currPos]}')"></div>` )
          setTimeout(function(){
              document.querySelector("#slide").remove();
          } ,1000)

          if(currPos + 1 >= images.length){
            currPos = 0;
          }
          else{
                currPos++ ;
          }
      }
}