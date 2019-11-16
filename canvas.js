// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var c = canvas.getContext('2d'); //this gives us access to all of the 2d methods so we can use to draw on the screen
// // c.fillStyle="maroon";
// // c.fillRect(100, 400, 100, 100) //x y width height
// // c.fillStyle="orange";
// // c.fillRect(200, 300, 100, 100) //x y width height
// // c.fillStyle="yellow";
// // c.fillRect(300, 200, 100, 100) //x y width height
// // c.fillStyle="green";
// // c.fillRect(400, 100, 100, 100) //x y width height
// // console.log(canvas)

// // //Line
// // c.beginPath();
// // c.moveTo(50,300);//takes in x and y
// // c.lineTo(300,100);
// // c.lineTo(400,300);
// // c.strokeStyle = "teal";
// // c.stroke();



// //Arc / Circle
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI *2, true);
// // c.strokeStyle="blue";
// // c.stroke();

// // for (var i =0; i< 150; i++){
// // var x = Math.random() * window.innerWidth;
// // var y = Math.random() * window.innerHeight;
// // var color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
// //  c.beginPath();
// // c.arc(x, y, 30, 0, Math.PI *2, true);
// // c.strokeStyle=color;
// // c.stroke();
// // }
// var mouse ={
//     x: undefined,
//     y: undefined
// }
// maxRadius = 40;
// minRadius = 5;

// var colorArray = [
//     "#0C120C",
//     "#CC2936",
//     "#841C26",
//     "#757780",
//     "#FF3C38"
// ]

// window.addEventListener("mousemove", 
// function(e){
//     mouse.x=e.x;
//     mouse.y=e.y;
// })

// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     init();
// })


// function Circle(x,y, dx, dy, radius){
// //capital letter indicates an object
// this.x=x;
// this.y=y;
// this.dx =dx;
// this.dy = dy;
// this.radius = radius;
// this.color=colorArray[Math.floor((Math.random() * colorArray.length))];

// this.draw = function(){
// c.beginPath();
// c.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
// c.fillStyle=this.color;
// c.fill();
// }

// this.update = function (){
//     if(this.x + this.radius > innerWidth 
//         || this.x- this.radius <0){
//         this.dx = -this.dx;
//     }
//     if(this.y + this.radius > innerHeight 
//         || this.y - this.radius <0){
//         this.dy=-this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;

//     //interactivity
//     if(mouse.x - this.x<100 && mouse.x - this.x>-100 && mouse.y - this.y < 100 && mouse.y - this.y >-100 && this.radius < maxRadius){
//     this.radius +=1;
//     } else if(this.radius > minRadius){
//         this.radius -=1;
//     }

//     this.draw();
// }

// }


// var circleArray=[];

// function init(){
//     circleArray=[];

// for(var i =0; i<1500; i++){
//     var x= window.innerWidth/2;
//     // Math.random() * (innerWidth -radius * 2) + radius;
//     var y= window.innerHeight/2;
//     // Math.random() * (innerHeight -radius *2) + radius;
//     var dx = (Math.random() -0.5)*8;
//     var dy = (Math.random() -0.5)*8;
//     var radius = (Math.random() * 3 +1);
//     var color=colorArray[Math.floor((Math.random() * colorArray.length))];
//     circleArray.push(new Circle(x,y,dx,dy,radius, color))
// }

// }
// const animate = ()=>{
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0,innerWidth,innerHeight); //x,y

//     for(var i=0; i< circleArray.length; i++){
//         circleArray[i].update();
//     }
    
// }
// init();;
// animate();


//////////////////////////////////////////////////////////////////////
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); //this gives us access to all of the 2d methods so we can use to draw on the screen
// c.fillStyle="maroon";
// c.fillRect(100, 400, 100, 100) //x y width height
// c.fillStyle="orange";
// c.fillRect(200, 300, 100, 100) //x y width height
// c.fillStyle="yellow";
// c.fillRect(300, 200, 100, 100) //x y width height
// c.fillStyle="green";
// c.fillRect(400, 100, 100, 100) //x y width height
// console.log(canvas)

// //Line
// c.beginPath();
// c.moveTo(50,300);//takes in x and y
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "teal";
// c.stroke();



//Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI *2, true);
// c.strokeStyle="blue";
// c.stroke();

// for (var i =0; i< 150; i++){
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
//  c.beginPath();
// c.arc(x, y, 30, 0, Math.PI *2, true);
// c.strokeStyle=color;
// c.stroke();
// }
var mouse ={
    x: undefined,
    y: undefined
}
maxRadius = 40;
minRadius = 5;

var colorArray = [
    "#0C120C",
    "#CC2936",
    "#841C26",
    "#757780",
    "#FF3C38"
]

// window.addEventListener("mousemove", 
// function(e){
//     mouse.x=e.x;
//     mouse.y=e.y;
// })

window.addEventListener("touchmove", function(e){
    mouse.x=e.touches[0].clientX;
    mouse.y=e.touches[0].clientY;
    e.stopPropagation();
 
}, {passive: false})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


function Circle(x,y, dx, dy, radius){
//capital letter indicates an object
this.x=x;
this.y=y;
this.dx =dx;
this.dy = dy;
this.radius = radius;
this.color=colorArray[Math.floor((Math.random() * colorArray.length))];

this.draw = function(){
c.beginPath();
c.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
c.fillStyle=this.color;
c.fill();
}

this.update = function (){
    if(this.x + this.radius-50 > innerWidth
        || this.x- this.radius <0){
        this.dx = -this.dx;
    }
    if(this.y + this.radius-50 > innerHeight
        || this.y - this.radius <0){
        this.dy=-this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if(mouse.x - this.x<100 && mouse.x - this.x>-100 && mouse.y - this.y < 100 && mouse.y - this.y >-100 && this.radius < maxRadius){
    this.radius +=1;
    } else if(this.radius > minRadius){
        this.radius -=1;
    }

    this.draw();
}

}


var circleArray=[];

function init(){
    circleArray=[];

for(var i =0; i<1500; i++){
    var x= Math.random() * (innerWidth -radius * 2) + radius;
    var y= Math.random() * (innerHeight -radius *2) + radius;
    var dx = (Math.random() -0.5)*8;
    var dy = (Math.random() -0.5)*8;
    var radius = (Math.random() * 3 +1);
    var color=colorArray[Math.floor((Math.random() * colorArray.length))];
    circleArray.push(new Circle(x,y,dx,dy,radius, color))
}

}
const animate = ()=>{
    requestAnimationFrame(animate);
    c.clearRect(0, 0,innerWidth,innerHeight); //x,y

    for(var i=0; i< circleArray.length; i++){
        circleArray[i].update();
    }
    
}
init();;
animate();