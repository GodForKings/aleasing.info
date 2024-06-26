'use strict'

// кнопка смены
// Темная тема

const btnDarkMode = document.querySelector('.dark-mode-btn')

const headerForDark = document.querySelector('.header')

// 1.Проверка на уровне системных настроек
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
	headerForDark.classList.add('dark')
}

// 2.Проверка темной темы в local storage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
	headerForDark.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
	headerForDark.classList.remove('dark')
}

// Включение по клику на кнопке
btnDarkMode.onclick = () => {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	headerForDark.classList.toggle('dark')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}
