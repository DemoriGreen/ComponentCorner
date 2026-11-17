import './Header.css'

function Header({ storeName }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={storeName + ' home'}>
        <span className="brand-mark">C</span>
        <span>{storeName}</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#products">Shop</a>
        <a href="#footer">Contact</a>
      </nav>
      <a className="header-link" href="#products">Shop now <span>↗</span></a>
    </header>
  )
}

export default Header
