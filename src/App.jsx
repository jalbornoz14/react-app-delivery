import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='logo'>
        <img src='Motorizado.svg'></img>
      </div>
      <section className='title'>
        <h1 className='title-h1'>Chaskys</h1>
        <span className='subtitle'>Delivery app</span>
      </section>
      <section className='inputs-form'>
        <input type="text" name="user" id="user" placeholder='Usuario' />
        <input type="password" name="password" id="password" placeholder='Contraseña' />
      </section>
      <section className='btn-login'>
        <span>¿Olvidaste tu contraseña?</span>
        <button>login</button>
        <span>o</span>
        <button>Create una cuenta</button>
      </section>
    </>
  )
}

export default App
