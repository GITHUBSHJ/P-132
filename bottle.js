start = "";
img = "";
objectDetector = "";

function preload()
{
	img = loadImage('botl.jpeg');
}
function setup()
{
	canvas = createCanvas(640, 600);
	canvas.center();
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById("start").innerHTML = "Status : DETECTING OBJECTS";
}
function modelLoaded()
{
	console.log(
		"%cMADE BY - SWASTIK SIBAM NAYAK",
		"color: white; background:linear-gradient(#E66465, #9198E5); padding: 1.2em; border-radius: 6px;"
	 );
	 start = true;
	 objectDetector.detect(img, gotResult);
}
function draw()
{
	image(img, 0, 150, 640, 590);
}
function gotResult(error, results)
{
	if (error)
	{
		console.log(error);
	}

	console.log(results);
}