import iconList from '../images/icon-list.svg'

const paragraphList = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
]

export function setupList(element: HTMLUListElement) {
  paragraphList.forEach(paragraph => {
    const listElement = document.createElement('li')
    const paragraphElement = document.createElement('p')
    const iconListElement = document.createElement('img')
    iconListElement.src = iconList
    paragraphElement.textContent = paragraph
    listElement.appendChild(iconListElement)
    listElement.appendChild(paragraphElement)
    element?.appendChild(listElement)
  })
}