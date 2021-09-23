var canvas = new fabric.Canvas("myCanvas");

block_img_height = 30;
block_img_width = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function image_update(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keypress);

function my_keypress(e) {
    keyPress=e.keyCode;
    console.log(keyPress);

    if (e.shiftKey == true && keyPress=='80') {
        block_img_height += 10;
        block_img_width += 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
        console.log( "height = " + block_img_height + " width = " + block_img_width);
    }
    if (e.shiftKey == true && keyPress == '77') {
        block_img_height -= 10;
        block_img_width -= 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
        console.log("height = " + block_img_height + " width = " + block_img_width);
    }
    if (keyPress == '37'){
        left();
        console.log("left");
    }
    if (keyPress == '38'){
        up();
        console.log("up");
    }
    if (keyPress == '39'){
        right();
        console.log("right");
    }
    if (keyPress == '40'){
        down();
        console.log("down");
    }
    if (keyPress == '67') {
        image_update("cloud.jpg");
        console.log("c");
    }
    if (keyPress == '68') {
        image_update("dark_green.png");
        console.log("d");
    }
    if (keyPress == '71') {
        image_update("ground.png");
        console.log("g");
    }
    if (keyPress == '76') {
        image_update("light_green.png");
        console.log("l");
    }
    if (keyPress == '82') {
        image_update("roof.jpg");
        console.log("r");
    }
    if (keyPress == '84') {
        image_update("trunk.jpg");
        console.log("t");
    }
    if (keyPress == '85') {
        image_update("unique.png");
        console.log("u");
    }
    if (keyPress == '87') {
        image_update("wall.jpg");
        console.log("w");
    }
    if (keyPress == '89') {
        image_update("yellow_wall.png");
        console.log("y");
    }

}

function left() {
   if( player_x > 10 ) {
    player_x = player_x - block_img_width;
    console.log("When Left Arrow is pressed , x = " + player_x + " y = " + player_y );
    console.log("Block image width = " + block_img_width);
    canvas.remove(player_object);
    player_update();
    }
}

function right() {
    if ( player_x <=900) {
        player_x = player_x + block_img_width;
        console.log("When Right Arrow is pressed , x = " + player_x + " y = " + player_y );
        console.log("Block image width = " + block_img_width);
        canvas.remove(player_object);
        player_update();
    }
}

function up() {
    if (player_y>=10){
        player_y = player_y - block_img_height;
        console.log("When Up Arrow is pressed , x = " + player_x + " y = " + player_y );
        console.log("Block image height = " + block_img_height);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y<=500){
        player_y = player_y + block_img_height;
        console.log("When Up Arrow is pressed , x = " + player_x + " y = " + player_y );
        console.log("Block image height = " + block_img_height);
        canvas.remove(player_object);
        player_update();
    }
}
