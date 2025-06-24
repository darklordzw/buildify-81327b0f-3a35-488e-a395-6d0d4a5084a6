
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Fusen</h1>
          <p>Learn more about our company and our mission</p>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="about-image">
              <div className="image-placeholder">
                <span>Company Image</span>
              </div>
            </div>
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2015, Fusen began with a simple mission: to provide businesses 
                with the tools and expertise they need to thrive in an ever-changing market.
              </p>
              <p>
                What started as a small team of dedicated professionals has grown into a 
                full-service company with a reputation for excellence and innovation.
              </p>
              <p>
                Today, we continue to build on our foundation of quality service and 
                forward-thinking solutions, helping businesses of all sizes achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To empower businesses through innovative solutions that drive growth, 
                efficiency, and success. We are committed to delivering exceptional 
                service and building lasting relationships with our clients.
              </p>
            </div>
            <div className="vision-card">
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of business solutions, recognized for our 
                expertise, integrity, and commitment to excellence. We aim to set new 
                standards in our industry and make a positive impact on the businesses 
                we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-3">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>Photo</span>
                </div>
              </div>
              <div className="member-info">
                <h3>John Doe</h3>
                <p className="member-title">CEO & Founder</p>
                <p className="member-bio">
                  With over 20 years of industry experience, John leads our company 
                  with vision and expertise.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>Photo</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Jane Smith</h3>
                <p className="member-title">COO</p>
                <p className="member-bio">
                  Jane oversees our day-to-day operations, ensuring we deliver 
                  excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>Photo</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Michael Johnson</h3>
                <p className="member-title">CTO</p>
                <p className="member-bio">
                  Michael leads our technical initiatives, keeping us at the 
                  forefront of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-cols-3">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, from the solutions we 
                provide to the relationships we build.
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and ethical 
                practices, building trust with our clients and partners.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We embrace change and continuously seek new and better ways to 
                serve our clients and solve complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;