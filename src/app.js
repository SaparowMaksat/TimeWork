import getRandomColor from './utils'

const initApp = () => {
	const buttonColor = document.createElement('button')
	buttonColor.className = 'button'
	buttonColor.textContent = 'Изменить цвет страницы'
	document.body.append(buttonColor)

	console.log('Hello world')

	buttonColor.addEventListener('click', () => {
		document.body.style.backgroundColor = getRandomColor()
	})
}

export default initApp
