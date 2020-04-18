var myCanv = document.getElementById('myCanvas');
var c = myCanv.getContext('2d');

myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

var mouseX, mouseY;
myCanvas.addEventListener('click', onclick);
function onclick(evt){
    mouseX = evt.x;
    mouseY = evt.y;
}
        
var tutup = new Tutup(250, 150);
function gameLoop(){
    c.clearRect(0,0, myCanvas.width, myCanvas.height);
    tutup.draw();
    tutup.update(mouseX, mouseY);
}
        
setInterval(gameLoop, 20);

function Tutup(x,y){
    this.x = x;
    this.y = y;
    this.angle ;
}

Tutup.prototype.draw = function(){
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.angle);
    //tutup
    // c.beginPath();
    // c.moveTo(80, 160);
    // c.lineTo(80, 130);
    // c.lineTo(250, 130);
    // c.lineTo(250, 160);

        //color-grading
c.rect(0, -10, 170, 30);
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

var grd=c.createLinearGradient(60, -30, 20, 70);
grd.addColorStop(0,'#8ED6FF');
grd.addColorStop(1,'#004CB3');
c.fillStyle=grd;
c.fill();

    
    c.beginPath();
    c.moveTo(70, 50);
    c.lineTo(70, 20);
    c.lineTo(95, 20);
    c.lineTo(95, 50);
    c.lineWidth = 2;
    c.strokeStyle='black';
    c.stroke();

    //color-grading

var grd=c.createLinearGradient(60,-30, 20, 70);
grd.addColorStop(0,'#8ED6FF');
grd.addColorStop(1,'#004CB3');
c.fillStyle=grd;
c.fill();
c.restore();

    //badan
c.beginPath();
c.moveTo(80, 160);
c.lineTo(250, 160);
c.lineTo(250, 390);
c.lineTo(80, 390);
c.closePath();
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

//color-grading
    for (var i = 0; i<6; i++){
        for (var j=0; j<3; j++){
            c.save();
            c.fillStyle='rgb(' + (3*i) + ', ' + (155 - 30 * i) + ', 155)';
            c.translate(20 + j * 50, 20 + i * 36);
            c.fillRect(61,141,68,48);
            c.restore();
        }
    }
}

Tutup.prototype.update = function(mouseX, mouseY){
    var dx = mouseX - this.x;
    var dy = mouseY - this.y;
    this.angle = Math.atan2(dy, dx) ;
    
}