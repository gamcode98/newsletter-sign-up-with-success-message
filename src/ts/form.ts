export function setupForm(element: HTMLFormElement) {
  const div = document.createElement('div')
  const span = document.createElement('span')
  const label = document.createElement('label')
  const input = document.createElement('input')
  const button = document.createElement('button')

  label.htmlFor = 'email'
  label.textContent = 'Email address'

  div.classList.add('form-group')

  div.appendChild(label)
  div.appendChild(span)

  input.id = 'email'
  input.placeholder = 'email@company.com'
  input.type = 'email'
  input.classList.add('is-valid')

  button.type = 'submit'
  button.textContent = 'Subscribe to monthly newsletter'

  element?.appendChild(div)
  element?.appendChild(input)
  element?.appendChild(button)

}