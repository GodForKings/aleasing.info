'use strict'

// Элементы формы
// Для цены Предмета лизинга
const priceInput = document.getElementById('price-input')
const priceRange = document.getElementById('price-range')

// Для срока лизинга
const timeInput = document.getElementById('time-input')
const timeRange = document.getElementById('time-range')

// Для первоначального взноса
const firstPaymentInput = document.getElementById('firstPayment-input')
const firstPaymentRange = document.getElementById('firstPayment-range')

// Элементы итога
const totalPriceElement = document.getElementById('total-price')
const outPayment = document.getElementById('out-payment')
// все input элементы
const inputs = document.querySelectorAll('input')

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]')

// Форматер для чисел
const formatter = new Intl.NumberFormat('ru')

// функция расчета стоимости лизинга
function calculate() {
	// Y=K*(X-fP)
	let firstPayment =
		+(parseInt(priceRange.value) * firstPaymentInput.value) / 100
	let ratioPrice = +1.06 // коэффициент срока лизинга
	try {
		if (parseInt(timeRange.value) - 12 > 0)
			ratioPrice += (parseInt(timeInput.value) - 12) * 0.005
	} catch {
		console.log(`Введен неправильный формат`)
	}
	let totalPrice = (parseInt(priceRange.value) - firstPayment) * ratioPrice
	totalPriceElement.innerHTML = formatter.format(Math.trunc(totalPrice))
	outPayment.innerHTML = formatter.format(
		Math.trunc(totalPrice / parseInt(timeInput.value))
	)
}

// Связка range с текстовым полем
// Слушаем событие input
priceRange.addEventListener('input', function () {
	priceInput.value = priceRange.value
})

timeRange.addEventListener('input', function () {
	timeInput.value = timeRange.value
})

firstPaymentRange.addEventListener('input', function () {
	firstPaymentInput.value = firstPaymentRange.value
})

// Связь текстового поля с range
priceInput.addEventListener('input', function () {
	priceRange.value = priceInput.value
})

timeInput.addEventListener('input', function () {
	timeRange.value = timeInput.value
})

firstPaymentInput.addEventListener('input', function () {
	firstPaymentRange.value = firstPaymentInput.value
})

const arrayInput = Array.from(inputs)

arrayInput.forEach(item => {
	item.addEventListener('input', function () {
		calculate()
	})
})
