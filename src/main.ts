import './style.css'
import illustrationSignUpMobile from './images/illustration-sign-up-mobile.svg'
import illustrationSignUpDesktop from './images/illustration-sign-up-desktop.svg'
import { setupList, setupForm, sendForm } from './ts'

document.querySelector<HTMLBodyElement>('#app')!.innerHTML = `
  <main>
    <header>
      <picture>
        <source media="(min-width:768px )" srcset=${illustrationSignUpDesktop} />
        <source media="(min-width:375px )" srcset=${illustrationSignUpMobile} />
        <img src=${illustrationSignUpMobile} alt="hero image" />
      </picture>
    </header>
    <div class='container'>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul id='ul-list'></ul>
      <form id='form'></form>
    </div>
  </main>
`

document.addEventListener('DOMContentLoaded', () => {
  setupList(document.querySelector<HTMLUListElement>('#ul-list')!)
  setupForm(document.querySelector<HTMLFormElement>('#form')!)
  sendForm()
})



