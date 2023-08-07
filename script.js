const screen = document.querySelector(".backgroundselector");
const spanclr = document.querySelector("#clr");
let randomColor, colors = []; 


// -----------   switch on navbar   --------------  //


document.querySelector(".logo").addEventListener("click" , function(){
    location.reload();
})

document.querySelector("#hex").addEventListener("click", function(){
    if(!document.querySelector("#hex").classList.contains("active")){

        document.querySelector("#simple").classList.remove("active");
        document.querySelector("#hex").classList.add("active");

    }
})


document.querySelector("#simple").addEventListener("click", function(){
    if(!document.querySelector("#simple").classList.contains("active")){

        document.querySelector("#hex").classList.remove("active");
        document.querySelector("#simple").classList.add("active");
    } 

})


// ------------   code for simple color flippper   -------------- // 

document.getElementById("btn").addEventListener("click", function() {

    if(document.querySelector("#simple").classList.contains("active")){

        colors = ["crimson", "violet", "purple", "yellow", "lightblue", "pink", "white"];

        randomColor = selectRandomColor() ;
        screen.style.backgroundColor = randomColor;
        spanclr.textContent = randomColor;
        spanclr.style.color = randomColor;


        function selectRandomColor(){
            return colors[Math.floor(Math.random() * colors.length)]
        } 
    } else {

    // -------------    code for hex color flipper    --------------- //

        colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "c", "D", "E", "F"];

        randomColor = selectRandomcolor();
        screen.style.backgroundColor = randomColor;
        spanclr.textContent = randomColor;
        spanclr.style.color = "rgb(23, 121, 232)";


        function selectRandomcolor(){
            let color = "#";
            for(let i=0; i<6; i++){
                color = color + colors[Math.floor(Math.random() * colors.length)];
            }
            return color;
        }

    }

})

//  --------------------   gsap code   ----------------------- //

let tl = gsap.timeline();

tl.from(".navbar .logo",{
    y:-160,
    duration:0.5
})

tl.from(".navbar .navmenu h3",{
    y:-160,
    duration:0.5
})

gsap.from(".back",{
    scale:0.5,
    duration:1
})

gsap.from(".changeclr",{
    scale:0.5,
    duration:1
})

