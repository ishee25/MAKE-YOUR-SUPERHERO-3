canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("shift key and p pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (e.shiftKey == true && keyPressed == '77'){
        console.log("shift key and m pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if( keyPressed == '38'){
        up();
        console.log("up");
    }

    if( keyPressed == '39'){
        right();
        console.log("right");
    }

    if( keyPressed == '40'){
        down();
        console.log("down");
    }

    if( keyPressed == '37'){
        left();
        console.log("left");
    }

    if( keyPressed == '70'){
        new_image("spiderman_face.png");
        console.log("f");
    }

    if( keyPressed == '66'){
        new_image("ironman_body.png");
        console.log("b");
    }

    if( keyPressed == '76'){
        new_image("hulk_legs.png");
        console.log("l");
    }

    if( keyPressed == '82'){
        new_image("thor_right_hand.png");
        console.log("r");
    }

    if( keyPressed == '72'){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        console.log("Block height =" + block_height);
        console.log("When up arrow key is pressed, x = " + player_x + ",y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 550){
        player_y = player_y + block_height;
        console.log("Block height =" + block_height);
        console.log("When down arrow key is pressed, x = " + player_x + ",y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_width;
        console.log("Block width =" + block_width);
        console.log("When left arrow key is pressed, x = " + player_x + ",y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 900){
        player_x = player_x + block_width;
        console.log("Block width =" + block_width);
        console.log("When right arrow key is pressed, x = " + player_x + ",y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}