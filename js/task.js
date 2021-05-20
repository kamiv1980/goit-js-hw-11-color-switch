'use strict'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const body = document.querySelector('body')
const start = document.querySelector('button[data-action="start"]')
const stop = document.querySelector('button[data-action="stop"]')
let timerId

const randomIntegerFromInterval = () => {
  body.style.background =
    colors[Math.floor(Math.random() * (colors.length + 1))]
}

const changeColor = () => {
  start.setAttribute('disabled', 'true')
  timerId = setInterval(randomIntegerFromInterval, 1000)
}

const stopChange = () => {
  clearInterval(timerId)
  start.removeAttribute('disabled')
}

start.addEventListener('click', changeColor)
stop.addEventListener('click', stopChange)
