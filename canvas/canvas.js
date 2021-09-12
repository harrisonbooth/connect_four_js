let context = canvas.getContext('2d')
let canvas = document.querySelector('canvas')
// canvas.width = 900;
// canvas.height = 500;


//ANIMATING MOUSE
let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (event) {
    // console.log(event);
    mouse.x = event.x;
    mouse.y = event.y
})

function Circle (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'red';
        context.stroke(); 
        context.fillStyle = 'red'
        context.fill();
    }

    this.update = function () {
        this.x = mouse.x
        this.y = mouse.y
        this.draw()
    }
    
}

let circle = new Circle(100, 100, 30)

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight)
    circle.update()
}

animate()

//CREATING A BOARD


// function createGrid (){
//     //CREATING EMPTY BOARD
    
    

//     newGrid = function(){
//         let img = new Image();
//     img.src = "./Empty2.svg";

//         //ROW1 x, y, itemWidth, itemHeight
//         let tile1 =  context.drawImage(img, 50, 100, 50, 50);
//         let tile2 = context.drawImage(img, 100, 100, 50, 50);
//         let tile3 = context.drawImage(img, 150, 100, 50, 50);
//         let tile4 = context.drawImage(img, 200, 100, 50, 50);
//         let tile5 = context.drawImage(img, 250, 100, 50, 50);
//         let tile6 = context.drawImage(img, 300, 100, 50, 50);
//         let tile7 = context.drawImage(img, 350, 100, 50, 50);

//         //ROW2
//         let tile8 =   context.drawImage(img, 50, 150, 50, 50);
//         let tile9 =  context.drawImage(img, 100, 150, 50, 50);
//         let tile10 = context.drawImage(img, 150, 150, 50, 50);
//         let tile11 = context.drawImage(img, 200, 150, 50, 50);
//         let tile12 = context.drawImage(img, 250, 150, 50, 50);
//         let tile13 = context.drawImage(img, 300, 150, 50, 50);
//         let tile14 = context.drawImage(img, 350, 150, 50, 50);

//         //ROW3
//         let tile15 =  context.drawImage(img, 50, 200, 50, 50);
//         let tile16 = context.drawImage(img, 100, 200, 50, 50);
//         let tile17 = context.drawImage(img, 150, 200, 50, 50);
//         let tile18 = context.drawImage(img, 200, 200, 50, 50);
//         let tile19 = context.drawImage(img, 250, 200, 50, 50);
//         let tile20 = context.drawImage(img, 300, 200, 50, 50);
//         let tile21 = context.drawImage(img, 350, 200, 50, 50);

//         //ROW 4
//         let tile22 =  context.drawImage(img, 50, 250, 50, 50);
//         let tile23 = context.drawImage(img, 100, 250, 50, 50);
//         let tile24 = context.drawImage(img, 150, 250, 50, 50);
//         let tile25 = context.drawImage(img, 200, 250, 50, 50);
//         let tile26 = context.drawImage(img, 250, 250, 50, 50);
//         let tile27 = context.drawImage(img, 300, 250, 50, 50);
//         let tile28 = context.drawImage(img, 350, 250, 50, 50);

//         //ROW 5
//         let tile29 =  context.drawImage(img, 50, 300, 50, 50);
//         let tile30 = context.drawImage(img, 100, 300, 50, 50);
//         let tile31 = context.drawImage(img, 150, 300, 50, 50);
//         let tile32 = context.drawImage(img, 200, 300, 50, 50);
//         let tile33 = context.drawImage(img, 250, 300, 50, 50);
//         let tile34 = context.drawImage(img, 300, 300, 50, 50);
//         let tile35 = context.drawImage(img, 350, 300, 50, 50);

//         //ROW 6
//         let tile36 =  context.drawImage(img, 50, 350, 50, 50);
//         let tile37 = context.drawImage(img, 100, 350, 50, 50);
//         let tile38 = context.drawImage(img, 150, 350, 50, 50);
//         let tile39 = context.drawImage(img, 200, 350, 50, 50);
//         let tile40 = context.drawImage(img, 250, 350, 50, 50);
//         let tile41 = context.drawImage(img, 300, 350, 50, 50);
//         let tile42 = context.drawImage(img, 350, 350, 50, 50);

//         //ROW 7
//         let tile43 =  context.drawImage(img, 50, 400, 50, 50);
//         let tile44 = context.drawImage(img, 100, 400, 50, 50);
//         let tile45 = context.drawImage(img, 150, 400, 50, 50);
//         let tile46 = context.drawImage(img, 200, 400, 50, 50);
//         let tile47 = context.drawImage(img, 250, 400, 50, 50);
//         let tile48 = context.drawImage(img, 300, 400, 50, 50);
//         let tile49 = context.drawImage(img, 350, 400, 50, 50);
//     }
//     newGrid()
// }

//LOGIC FOR ON CLICK 
            // let mouse = {
            //     x: undefined
            //     y: undefined
            // }

            // window.addEventListener('click', function (e) => {
            //     console.log(e)
            //     mouse.x = e.x
            //     mouse.y = e.y
            // })

            // this.update = function(){
            //     this.x = mouse.x
            //     this.y = mouse.y
            // }