
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Fusen</h1>
            <p>Your trusted partner for innovative business solutions</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="grid grid-cols-3">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Business Growth</h3>
              <p>We help your business reach new heights with our strategic solutions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Stay ahead of the competition with our innovative approaches.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Team</h3>
              <p>Our team of experts is dedicated to your success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="about-preview-content">
              <h2>About Fusen</h2>
              <p>
                Founded in 2015, Fusen has been providing exceptional services to businesses 
                of all sizes. Our mission is to empower organizations through innovative 
                solutions that drive growth and success.
              </p>
              <p>
                With a team of dedicated professionals, we bring expertise and passion to 
                every project we undertake.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
            <div className="about-preview-image">
              <div className="image-placeholder">
                <span>Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Fusen has transformed our business operations. Their innovative solutions 
                  have helped us increase efficiency and reduce costs significantly."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <div className="author-info">
                  <h4>Jane Smith</h4>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to grow your business?</h2>
            <p>Contact us today to discuss how we can help you achieve your goals.</p>
            <Link to="/contact" className="btn">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;