import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    // Background lives on .hero, which is full-bleed (not constrained by .container)
    <section id="home" className="hero">
      <div className="hero-inner container">
        <h1>Welcome to Global Youth Leaders</h1>
        <p clasName="hero-subtext">
          The goal of GYL is to inspire and empower youth to become socially responsible leaders
          in their home, community, country and around the globe in order to create a just and
          sustainable future.
        </p>
        <button
          className="learnbtn"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn more <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  )
}

export default Hero
