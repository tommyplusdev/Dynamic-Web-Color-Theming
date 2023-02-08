var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N", "N", "N"]
}

function fetchColors() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var palette = JSON.parse(http.responseText).result;
			console.log(palette)
			const colors = {
				color1: palette[0],
				color2: palette[1],
				color3: palette[2],
				color4: palette[3],
				color5: palette[4],
			}
			for (let color in colors) {
				console.log(color);
				console.log(`rgb(${colors[color][0]}, ${colors[color][1]}, ${colors[color][2]})`)
				
				//set the colors
				document.querySelector(`#${color}`).style.backgroundColor = `rgb(${colors[color][0]}, ${colors[color][1]}, ${colors[color][2]})`
	
				//set the color fields
				document.querySelector(`#${color} figcaption`).textContent = `rgb(${colors[color][0]}, ${colors[color][1]}, ${colors[color][2]})`
			}
		}
	}
	
	http.open("POST", url, true);
	http.send(JSON.stringify(data));
}

document.querySelector('#generate').addEventListener('click', fetchColors);

// possible gradient button using extracted ie.

// background: linear-gradient(135deg, rgb(233, 238, 243) 20%, rgb(231, 150, 102) 40%, rgb(212,156, 182) 60%, rgb(242, 23, 23) 80%, rgb(241, 23, 23) 100%);

// 	gradientColors.push(`rgb(${colors[color][0]}, ${colors[color][1]}, ${colors[color][2]})`)
// 	gradientColors = gradientColors.join(', ')
// 	let linearGradient = `linear-gradient(${gradientColors})`
// 	const setColors = function () {
// 	document.querySelector('#highlight').style.backgroundClip = "text";
// 	document.querySelector('#highlight').style.background = linearGradient;
// 	document.querySelector('#highlight').style.color = "transparent";
// }
// setColors();