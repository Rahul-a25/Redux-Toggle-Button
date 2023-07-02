import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <p>Geekster</p>
      <Link to='/'>Home</Link> <br />
      <Link to='/contact'>Contact</Link><br />
      <Link to='/service'>Service</Link><br />
      <button>Toggel Theme To Dark</button>
      <h1>
      You can mail me aroradeveloper2000@gmail.com
      </h1>
    </>
  )
}

export default Contact