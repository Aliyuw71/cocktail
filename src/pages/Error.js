import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="error-container">
      <h1 className="error-title">
           Oops! It's A Dead End
      </h1>
      <Link className="error-link" to="/">back Home</Link>
    </section>
  )
}

export default Error