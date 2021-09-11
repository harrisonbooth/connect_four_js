let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let context = canvas.getContext('2d')

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