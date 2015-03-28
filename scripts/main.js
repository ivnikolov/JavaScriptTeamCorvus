
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var input = new Input();
attachListeners(input);

var player= new Player(100,100);

function update() {
    this.tick();
    this.render();
    requestAnimationFrame(update);
}

function tick(){
    player.update();
}

function render(ctx){
    ctx.clear(0,0,canvas.width, canvas.height)
    player.render(ctx);
}