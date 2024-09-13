import React from "react";
import "../about/About.css";
import Krishna from "../../photo/Krishna.png";
import Aman from "../../photo/Aman.png";
import Logo from "../../photo/logo.png";

const About = () => {
  return (
    <div className="about-container py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-info">
              <h1>About Us</h1>
              <p>
                Welcome to our company! We are committed to providing the best
                services and products to our customers. Our team of
                professionals works tirelessly to ensure that our clients
                receive the highest level of service and satisfaction.
              </p>
              <p>
                Established in 2020, we have grown rapidly thanks to our loyal
                customers and dedicated team. Our mission is to innovate and
                deliver quality solutions that exceed expectations.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src={Logo} alt="About Us" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="team-section">
              <h2>Meet Our Team</h2>
              <div className="team-members">
                {/* Team Member 1 */}
                <div className="team-member">
                  <img src={Aman} alt="Aman Keshari" />
                  <h3>Aman Keshari</h3>
                  <p>CEO & Founder</p>
                </div>
                {/* Team Member 2 */}
                <div className="team-member">
                  <img src={Krishna} alt="Krishna Keshari" />
                  <h3>Krishna Keshari</h3>
                  <p>Co-Founder</p>
                </div>
                {/* Add more team members as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
