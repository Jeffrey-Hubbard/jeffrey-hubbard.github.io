
// width = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// height = width;
height = 600; // in cells
width = 600; // in cells
//viewscreenWidth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

cellDimension =  1;

var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d");
var imageData = ctx.createImageData(width, height);
var data = imageData.data;
var seedLevel = 1.2;

// generate an array based on w, h for x, y coords
// initialize value to null

seed();
display();
	

	function seed() 
	{
		for (p = 0; p < data.length ; p+=4) 
		{
				if (Math.floor(Math.random() * 100) < seedLevel) 
				{
					data[p] = 128;
					data[p+1] = 128 ;
					data[p+2] = 128 ;
					data[p+3] = 1;

				}

				console.log ("p0-3 " + data[p] + " " + data[p+1] + " " + data[p+2] + " " + data[p+3])
		}
	}

	function display() 
	{
		ctx.putImageData(imageData, 0, 0);
	}

	// function nextGeneration() 
	// {
	// 	// create a temporary array w h for the new boardArray
	// 	var tempBoardArray = new Array();

	// 	for (w = 0; w < width; w++) {
	// 		tempBoardArray[w] = [];
	// 		for (h = 0; h < height; h++) 
	// 		{
	// 			tempBoardArray[w][h] = null;
	// 		}

	// 	}

	// 	// go through each coordinate in boardArray
	// 	for (w = 0; w < width; w++) 
	// 	{
	// 		for (h = 0; h < height; h++) 
	// 		{
	// 			// coordinate is boardArray[w][h]
	// 			// identify the adjacent coordinates
	// 			// each cell has eight neighbors
	// 			// [w-1][h+1]
	// 			// [w][h+1]
	// 			// [w+1][h+1]
	// 			// [w-1][h]
	// 			// [w+1][h]
	// 			// [w-1][h-1]
	// 			// [w][h-1]
	// 			// [w+1][h-1]
	// 			var neighborCount = 0;
	// 			// iterate through the adjacent coordinates (neighbors) and count how many are 1

	// 			if ((w-1>=0) && (h+1<= height)) 
	// 			{
	// 				if (boardArray[w-1][h+1] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (h+1 <= height) {
	// 				if (boardArray[w][h+1] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (w+1 < width && h+1 <= height) 
	// 			{
	// 				if (boardArray[w+1][h+1] == 1) {
	// 					//console.log("w " + w + " h " + h);
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (w-1 >= 0) {
	// 				if (boardArray[w-1][h] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (w+1 < width) 
	// 			{
	// 				if (boardArray[w+1][h] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (w-1 >= 0 && h-1 >= 0) 
	// 			{
	// 				if (boardArray[w-1][h-1] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (h-1 >= 0) {
	// 				if (boardArray[w][h-1] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			if (w+1 < width && h-1 >= 0)  
	// 			{
	// 				if (boardArray[w+1][h-1] == 1) {
	// 					neighborCount++;
	// 				}
	// 			}

	// 			var newState;

	// 			// if 1 and neighbors < 2, then 0
	// 			// if 1 and neighbors > 3, then 0
	// 			if ((boardArray[w][h] == 1 && neighborCount < 2) || (boardArray[w][h] == 1 && neighborCount > 3)) {
	// 				newState = 0;
	// 			}

	// 			if (boardArray[w][h] != 1 && neighborCount == 3) {
	// 				newState = 1;
	// 			}


	// 			// assign new state to temp array at [w][h]
	// 			tempBoardArray[w][h] = newState;
	// 		}

	// 	}

	// 	//set array = temp array
	// 	boardArray = tempBoardArray
	// 	display();
	// }
