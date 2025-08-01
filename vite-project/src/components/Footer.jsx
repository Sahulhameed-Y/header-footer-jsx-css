

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We provide quality solutions for your business needs.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: sh4304413@gmail.com</p>
          <p>Phone: 9344762175</p>
        </div>
        <div className="footer.section">
          <h3>Services</h3>
          <p> I have experience in one year of <bold>Airtel Payments Bank at promoter position </bold>and I have promotion to the salary in the starting 9 months. Recently I have resigned my work because my college final year I prepared my acadamics and placements training for the campus interview to be the reason. Additionally I completed the <bold>Typewriting English Lower exam </bold>in first class distinction with Government approved certificate.</p>
       </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
