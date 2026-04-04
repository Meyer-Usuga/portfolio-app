import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          Port<span>folio</span>
        </a>

        <div 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologías</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;