const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	let hexColor = '#';

	for (let i = 0; i < 6; i++) {
		hexColor += hex[randomColor()];
	}
	document.querySelector('.color').textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

function randomColor() {
	const min = 0;
	const max = hex.length - 1;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
