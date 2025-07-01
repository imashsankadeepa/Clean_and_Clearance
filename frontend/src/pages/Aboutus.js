import { Link } from 'react-router-dom';
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>The Power Behind the Shine</h1>
      </section>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          As a premier cleaning and clearance service in the UK, we don’t just clean—we transform
          spaces. Throughout our journey, our mission has been simple: to deliver powerful,
          personalized, and eco-conscious cleaning and clearance services that exceed expectations.
        </p>
        <p>
          Whether it’s your cozy home, a buzzing office, or a school filled with curious minds, we
          treat every space with the highest care and professionalism, ensuring spotless results that
          enhance your environment.
        </p>
        <Link to="/contact" className="cta-button">Book Our Services</Link>
      </section>
    </div>
  );
}

export default AboutUs;