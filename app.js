const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	const randomColor = colors[randomNum()];
	document.body.style.backgroundColor = randomColor;
	document.querySelector('.color').textContent = randomColor;
});

const randomNum = () => {
	const min = 0;
	const max = colors.length - 1;

	return Math.floor(Math.random() * (max - min + 1)) + min;
};
