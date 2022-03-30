let color = ['red','green','pink','yellow','purple','voilet','orange'];

let button = document.getElementById("btn");

button.addEventListener('click',function(){
    let randomColor = color[Math.floor(Math.random() * color.length)];

     let container = document.getElementById('container');

    container.style.background = randomColor;
 
})
