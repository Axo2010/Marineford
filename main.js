var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '75')
	{
		new_image('Kizaru.webp'); 
		console.log("K");
	}
	if(keyPressed == '65')
	{
		block_x = 200;
		new_image('Aokiji.webp'); 
		console.log("A");
	}
	
	if(keyPressed == '76')
	{
		block_x =350;
		new_image('Luffy.png'); 
		console.log("L");
	}
	if(keyPressed == '83')
	{
		block_x = 600;
		new_image('Sakasuki.webp'); 
		console.log("S");
	}
	if(keyPressed == '77')
	{
		block_x = 700;
		new_image('Mihawk.webp'); 
		console.log("M");
	}
		if(keyPressed == '66')
	{
		block_x = 800;
		new_image('Shirogige.png'); 
		console.log("B");
	}
}
