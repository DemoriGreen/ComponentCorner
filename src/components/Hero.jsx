import './Hero.css'

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-label">TECH THAT FITS YOUR LIFE</p>
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a className="hero-button" href="#products">{buttonText} <span>→</span></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="hero-device">CC<span>+</span></div>
        <div className="hero-spark spark-one">✦</div>
        <div className="hero-spark spark-two">✧</div>
      </div>
      <div className="hero-bottom-line">DISCOVER • CONNECT • CREATE</div>
    </section>
  )
}

export default Hero
