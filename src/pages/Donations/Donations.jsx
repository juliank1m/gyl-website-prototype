import React from 'react'
import { Link } from 'react-router-dom'
import './Donations.css'

const Donations = () => {
  return (
    <div className="donations-page">
      <h1>Support Our Mission</h1>
      <p>
        Your contribution helps us provide youth with leadership opportunities, 
        support communities, and build a brighter future together.
      </p>

      <p className="donation-purpose">
        At <strong>Global Youth Leaders (GYL)</strong>, every donation goes directly toward 
        empowering young people to become socially responsible leaders.  
        Funds support community volunteering projects, leadership workshops, 
        mentorship programs, and initiatives like hospital fundraisers, senior outreach, 
        and sustainability campaigns.  
      </p>

      <a 
        href="https://www.paypal.com/donate?token=KIHgb1JbnnnWoxK4HV6rXoYkQyztgCoVrPbF4hoiQIBj1T7RV5Yshwwlk1lQDeOerVvekbRyh6nbkSqs"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Donate Now
      </a>

      {/* Back to Home button */}
      <div style={{ marginTop: '30px' }}>
        <Link to="/" className="btn-outline">⬅ Back to Home</Link>
      </div>
    </div>
  )
}

export default Donations
