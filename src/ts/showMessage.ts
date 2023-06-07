import iconList from '../images/icon-list.svg'

export function showMessage(email: string) {
  const main = document.querySelector('main')

  const divContainer = document.createElement('div')
  const divItem = document.createElement('div')
  const img = document.createElement('img')
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  const button = document.createElement('button')

  divContainer.classList.add('message-container')
  divItem.classList.add('message-item')
  img.src = iconList
  img.classList.add('icon-message')
  h1.textContent = 'Thanks for subscribing!'
  p.innerHTML = `A confirmation email has been to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`
  button.textContent = 'Dismiss message'
  button.type = 'button'

  divItem.appendChild(img)
  divItem.appendChild(h1)
  divItem.appendChild(p)
  divContainer.appendChild(divItem)
  divContainer.appendChild(button)
  main?.classList.add('with-message')
  main?.appendChild(divContainer)

  button.addEventListener('click', () => {
    const container = document.querySelector('.container') as HTMLDivElement
    const header = document.querySelector('header') as HTMLElement
    container.classList.remove('hide')
    header.classList.remove('hide')
    main?.classList.remove('with-message')
    divContainer.remove()
  })
}