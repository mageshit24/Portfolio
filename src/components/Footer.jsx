import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
import './Footer.css';

function Footer() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-top">
        <div className="footer-contact">
          {/* Email */}
          <div>
            <a href="mailto:mageshhariramk@gmail.com?subject=Hello%20Magesh&body=I%20would%20like%20to%20connect%20with%20you.">
              <FaEnvelope className="footer-icon" /> mageshhariramk@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/magesh-hariram-k-6011132a4" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mageshit24" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>

          {/* Phone */}
          <div>
            <a href="tel:+919626238464">
              <FaPhone className="footer-icon" /> +91 962 623 8464
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2025 MAGESH HARIRAM K | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
