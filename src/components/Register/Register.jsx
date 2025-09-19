import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for registering, ${formData.name}! We'll contact you soon.`)
    setFormData({name: '', email: '', message: ''})
  }

  return (
    <section id="register" className="register container">
      <h2>Register with Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder="Tell us why you want to join" 
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  )
}

export default Register
