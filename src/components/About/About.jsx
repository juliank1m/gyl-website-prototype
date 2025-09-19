import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about-left">
        <img src={about_img} alt="About GYL" className="about-img"/>
      </div>
      <div className="about-right">
        <h3>About GYL</h3>
        <h2>Empowering Youth for Tomorrow's World</h2>
        <p>
          Global Youth Leaders is an organization founded in 2009. It dedicates time to
          train future leaders by giving youth opportunities to volunteer and work on
          their leadership skills. Since its inception, GYL has helped various
          communities around the world in many different ways.
        </p>
        <p>
          Through volunteering, advocacy, and creative projects, GYL provides
          opportunities for students to grow as leaders while giving back to society.
          From fundraising for children's hospitals to supporting seniors and engaging
          in civic action, our members learn that leadership is about listening,
          collaborating, and building a better future together.
        </p>
        <p>
          At GYL, every voice matters. We believe that by supporting one another and
          working collectively, youth can turn ideas into action and vision into reality.
        </p>
      </div>
    </section>
  )
}

export default About
