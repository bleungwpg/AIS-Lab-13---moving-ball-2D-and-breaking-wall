function setup()
{

	createCanvas(600, 400);
	x = 250;
	y = 21;
	moveD = 1;
	moveR = 1;
	
}  


function draw()
{
	background(125,125,125);

	fill(255,0,0);
	ellipse(x,y,20,20);
	
	
	if (moveD == 1)
	{
		y = y + 6;
	}
	if (moveD == 0)
	{
		y = y - 5;
	}
	
	if (moveR == 1)
	{
		x = x + 4;
	}
	if (moveR == 0)
	{
		x = x - 5;
	}

	if (x > 590)
	{
		moveR = 0;
	}
	if (x < 10)
	{
		moveR = 1;
	}
	if (y > 390)
	{
		moveD = 0;
	}
	if (y < 10)
	{
		moveD = 1;
	}

}
