let player, wall1, wall2, wall3, wall4, direction, enemy, Room, Duck;
let alive = true
let Wall = 0;
let spawn = true;
let alive2 = true;
let enemyspeed = 2;
let frictionenemy = 0.5;

function preload() {
    img = loadImage('New Piskel.png')
    DuckImg = loadImage('duck.png')
    dvl = loadImage('enemy.png')
}
function setup() {

    Room = 0;
    new Canvas(400, 400);
    player = new Sprite(200, 200, 65, 50);
   player.img = img;
   Duck = new Sprite(200,200, 25, 25);
   Duck.img = DuckImg;
   
  

    
    wall1 =  new Sprite(0, 200, 10, 400, 'static');
    wall2 =  new Sprite(200, 0, 400, 10, 'static');
    wall3 =  new Sprite(400, 200, 10, 400, 'static');
    wall4 =  new Sprite(200, 400, 400, 10, 'static');
    
    wall1.color =  'black';
    wall2.color =  'black'; 
    wall3.color =  'black';
    wall4.color =  'black'; 
    


}

function draw() {
   
    clear();
    background('white');
  
        
player.rotation = 0;
Duck.y = player.y;
Duck.x = player.x + 50;
Duck.overlaps(allSprites)
console.log(Room);

    if (kb.pressing('left')) player.vel.x = -5, direction = 'left';
else if (kb.pressing('right')) player.vel.x = 5, direction = 'right';
else player.vel.x = 0;
if (kb.pressing('up')) player.vel.y = -5, direction = 'up';
else if (kb.pressing('down')) player.vel.y = 5, direction = 'down';
else player.vel.y = 0;
if (player.collides(wall1) && Wall !== 3) {
    player.x = 360
    player.y = 200
    Room = Room + 1
    Wall = 1

}
if (player.collides(wall2) && Wall !== 4) {
    player.x = 200
    player.y = 360
    Room = Room + 1
    Wall = 2
}
if (player.collides(wall3) && Wall !== 1) {
    player.x = 40
    player.y = 200
    Room = Room + 1
    Wall = 3
}
if (player.collides(wall4) && Wall !== 2) {
    player.x = 200
    player.y = 40
    Room = Room + 1
    Wall = 4
}
if(Room == 3){ 
    enemy.remove()
}
if(Room == 2){
    if (spawn == true){
    enemy = new Sprite(200, 200, 50, 65,);
   enemy.img = dvl
   
    spawn = false;
    }        
    
 /*    speed = .02; 
     enemy.y += (player.y - enemy.y) * speed;
enemy.x += (player.x - player.x) * speed;

   */ 
}
.0
//enemy.attractionPoint(0.5, mouseX, mouseY);

if(kb.presses('space') && direction == 'left') player.vel.x = -60;
if(kb.presses('space') && direction == 'right') player.vel.x = 60;
if(kb.presses('space') && direction == 'up') player.vel.y = -60;
if(kb.presses('space') && direction == 'down') player.vel.y = 60;

if(mouse.pressed()){
//   bullet = New Sprite(Duck.x,Duck.y,3,7);
bullet = new Sprite(Duck.x+20, Duck.y-3, 5,);
bullet.color = 'yellow';
bullet.overlap(player);
  bullet.moveTowards(mouse);
  bullet.life = 30;
 

}

    





}
