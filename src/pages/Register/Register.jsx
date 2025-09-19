import React from "react"
import { Link } from "react-router-dom"
import "./Register.css"

const Register = () => {
  return (
    <div className="register-page">
      <h1>Global Youth Leaders Canada (GYL)</h1>
      <h2>Member Application Form (2025-2026)</h2>

      <form className="register-form">
        {/* Student Info */}
        <fieldset>
          <legend>Student Information</legend>

          <label>
            Student Status <span className="required">*</span>
            <select required>
              <option value="">-- Select Status --</option>
              <option>Returning Student</option>
              <option>New Student</option>
            </select>
          </label>

          <label>
            First Name <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>
            Last Name <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>Korean Name <input type="text" /></label>

          <label>
            Email <span className="required">*</span>
            <input type="email" required />
          </label>

          <label>Name of School <input type="text" /></label>

          <label>
            Phone Number <span className="required">*</span>
            <input type="tel" required />
          </label>

          <label>
            Grade (in September 2025) <span className="required">*</span>
            <input type="number" required />
          </label>

          <label>Address <input type="text" /></label>
          <label>Apartment, Suite, etc <input type="text" /></label>

          <label>
            City <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>
            Province <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>
            Postal Code <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>
            Country <span className="required">*</span>
            <input type="text" required />
          </label>
        </fieldset>

        {/* Parent Info */}
        <fieldset>
          <legend>Parent Information</legend>

          <label>
            First Name <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>
            Last Name <span className="required">*</span>
            <input type="text" required />
          </label>

          <label>Relationship with Student <input type="text" /></label>
          <label>Other Relationship <input type="text" /></label>

          <label>
            Parent Email <span className="required">*</span>
            <input type="email" required />
          </label>

          <label>Parent Kakaotalk ID <input type="text" /></label>

          <label>
            Parent Phone Number <span className="required">*</span>
            <input type="tel" required />
          </label>
        </fieldset>

        {/* Volunteering Mandatory */}
        <fieldset>
          <legend>Volunteering (Mandatory)</legend>
          <ul className="mandatory-list">
            <li>Homework Club</li>
            <li>Senior Home</li>
            <li>General Meeting</li>
            <li>Workshop</li>
            <li>Forum</li>
          </ul>
          <p className="note">* These activities are mandatory for all members.</p>
        </fieldset>

        {/* Volunteering Optional */}
        <fieldset>
          <legend>Volunteering (Optional)</legend>
          <label><input type="checkbox" /> Ensemble</label>
          <label><input type="checkbox" /> Samulnori</label>
          <label><input type="checkbox" /> Public Speaking Workshop</label>
          <label><input type="checkbox" /> Dance</label>
          <label><input type="checkbox" /> Church Choir</label>
        </fieldset>

        {/* Uniform */}
        <fieldset>
          <legend>Uniform (New Members)</legend>
          <label>
            Size <span className="required">*</span>
            <select required>
              <option value="">-- Select Size --</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>
          </label>
        </fieldset>

        {/* Media Consent */}
        <fieldset>
          <legend>
            Student Media Consent <span className="required">*</span>
          </legend>
          <label>
            <input type="radio" name="media" value="yes" required /> Yes, I consent
          </label>
          <label>
            <input type="radio" name="media" value="no" required /> No, I do not consent
          </label>
        </fieldset>

        {/* Waiver Note */}
        <p className="waiver-note">
          By submitting this application, you agree to the Global Youth Leaders 
          Waiver of Liability and Mandatory Activity Requirements. Membership 
          Fee: $200 (Public Speaking Workshop $80 extra). Please e-transfer to 
          <strong> gylfinance@gmail.com</strong> with student’s name and grade.
        </p>

        <button type="submit" className="btn">Submit Application</button>
      </form>

      {/* Back to Home */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/" className="btn-outline">⬅ Back to Home</Link>
      </div>
    </div>
  )
}

export default Register
