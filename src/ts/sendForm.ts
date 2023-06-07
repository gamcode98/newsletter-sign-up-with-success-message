import { showMessage } from "./showMessage"
import ballTriangle from '../images/ball-triangle.svg'

export function sendForm() {
  const span = document.querySelector('span') as HTMLSpanElement
  const button = document.querySelector('button[type="submit"]') as HTMLButtonElement
  const input = document.querySelector('input[type="email"]') as HTMLInputElement
  const container = document.querySelector('.container') as HTMLDivElement
  const header = document.querySelector('header') as HTMLElement

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  button.addEventListener('click', (e) => {
    e.preventDefault()
    if (emailRegex.test(input.value)) {
      input.classList.replace('is-invalid', 'is-valid')
      span.textContent = ''
      button.disabled = true
      const img = document.createElement('img')
      img.src = ballTriangle
      img.width = 20
      button.textContent = ''
      button.appendChild(img)
      setTimeout(() => {
        container.classList.add('hide')
        header.classList.add('hide')
        showMessage(input.value)
        button.textContent = 'Subscribe to monthly newsletter'
        button.disabled = false
        input.value = ''
      }, 1000)
    } else {
      input.classList.replace('is-valid', 'is-invalid')
      span.textContent = 'Valid email required'
    }
  })

}