
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-overview section">
        <div className="container">
          <div className="services-intro text-center">
            <p>
              At Fusen, we offer a wide range of services designed to help your business 
              grow and succeed. Our team of experts works closely with you to understand 
              your unique needs and develop customized solutions.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Business Consulting</h3>
              <p>
                Strategic guidance to help you navigate challenges, identify opportunities, 
                and achieve your business goals.
              </p>
              <ul className="service-features">
                <li>Market Analysis</li>
                <li>Strategic Planning</li>
                <li>Process Optimization</li>
                <li>Growth Strategies</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Technology Solutions</h3>
              <p>
                Cutting-edge technology solutions to streamline your operations and 
                enhance your digital presence.
              </p>
              <ul className="service-features">
                <li>Software Development</li>
                <li>System Integration</li>
                <li>Cloud Solutions</li>
                <li>IT Infrastructure</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3>Marketing Services</h3>
              <p>
                Comprehensive marketing strategies to boost your brand visibility and 
                attract more customers.
              </p>
              <ul className="service-features">
                <li>Digital Marketing</li>
                <li>Content Creation</li>
                <li>Social Media Management</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3>HR Solutions</h3>
              <p>
                Effective human resources solutions to help you build and manage a 
                talented team.
              </p>
              <ul className="service-features">
                <li>Recruitment Services</li>
                <li>Employee Training</li>
                <li>Performance Management</li>
                <li>HR Consulting</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Financial Advisory</h3>
              <p>
                Expert financial guidance to optimize your financial performance and 
                ensure long-term stability.
              </p>
              <ul className="service-features">
                <li>Financial Planning</li>
                <li>Investment Strategies</li>
                <li>Risk Management</li>
                <li>Cost Optimization</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Project Management</h3>
              <p>
                Professional project management services to ensure your initiatives 
                are completed on time and within budget.
              </p>
              <ul className="service-features">
                <li>Project Planning</li>
                <li>Resource Allocation</li>
                <li>Risk Assessment</li>
                <li>Quality Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <h2 className="section-title text-center">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>
                  We begin with a thorough consultation to understand your business, 
                  goals, and challenges.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Analysis</h3>
                <p>
                  Our team analyzes your current situation and identifies areas for 
                  improvement and growth.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Strategy Development</h3>
                <p>
                  We develop a customized strategy tailored to your specific needs 
                  and objectives.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>
                  Our experts work with you to implement the strategy efficiently 
                  and effectively.
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Evaluation & Refinement</h3>
                <p>
                  We continuously monitor progress, evaluate results, and refine 
                  our approach as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to get started?</h2>
            <p>
              Contact us today to discuss how our services can help your business thrive.
            </p>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;