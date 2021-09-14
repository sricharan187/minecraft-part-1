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
        block_img_object.scaleToWidth(150);
        block_img_object.scaleToHeight(140);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}
