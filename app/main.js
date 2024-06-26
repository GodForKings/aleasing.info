'use strict'

// Липкий хедер

let header = document.querySelector('.js-header'),
	headerH = document.querySelector('.js-header').clientHeight

document.onscroll = () => {
	let scrollY = window.scrollY

	if (scrollY > headerH + 350) {
		header.classList.add('fixed')
		document.body.style.paddingTop = headerH + 'px'
	} else {
		document.body.removeAttribute('style')
		header.classList.remove('fixed')
	}
}

// Адаптивное бургер меню для тач узких экранов

const hamburger = document.querySelector('.header__hamburger')
const navBar = document.querySelector('.header__nav')

hamburger.onclick = function () {
	navBar.classList.toggle('active')
}

//Слайдер секция

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .slider__list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.slider__item')

thumbnail.appendChild(thumbnailItems[0])

// Функция перехода на следующий слайд

nextBtn.onclick = function () {
	moveSlider('next')
}

// Функция возврата на предыдущий

prevBtn.onclick = function () {
	moveSlider('prev')
}

function moveSlider(direction) {
	let sliderItems = sliderList.querySelectorAll('.slider__item')
	let thumbnailItems = document.querySelectorAll('.thumbnail .slider__item')

	if (direction === 'next') {
		sliderList.appendChild(sliderItems[0])
		thumbnail.appendChild(thumbnailItems[0])
		slider.classList.add('next')
	} else {
		sliderList.prepend(sliderItems[sliderItems.length - 1])
		thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
		slider.classList.add('prev')
	}

	slider.addEventListener(
		'animationend',
		function () {
			if (direction === 'next') {
				slider.classList.remove('next')
			} else {
				slider.classList.remove('prev')
			}
		},
		{ once: true }
	) // Удаляем обработчик событий после срабатывания
}
