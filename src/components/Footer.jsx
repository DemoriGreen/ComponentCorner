import './Footer.css'

function Footer({ storeName, description, email }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="footer-brand" href="#top">
            <span className="footer-brand-mark">C</span>
            {storeName}
          </a>
          <p>{description}</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#top">Home</a>
          <a href="#products">Shop products</a>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <a href={'mailto:' + email}>{email}</a>
          <p>Here to help with your next upgrade.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {storeName}. All rights reserved.</span>
        <span>Made for the curious.</span>
      </div>
    </footer>
  )
}

export default Footer
