import perfilImg from '../assets/perfil.jpg';

export function About() {
  return (
    <section id="sobre-mi" className="about section-container">
      <div className="about-content">

        <div className="about-text">
          <h1 className="about-title">
            Meyer <span>Restrepo</span>
          </h1>
          <h2 className="about-subtitle">Desarrollador de Software</h2>

          <div className="about-description">
            <p>
              Desarrollador frontend enfocado en construir experiencias web dinámicas, escalables y optimizadas.
              Valoro profundamente el trabajo en equipo, las buenas prácticas y el aprendizaje continuo para aportar valor real en cada proyecto.
            </p>
          </div>

          <div className="about-stack">
            <h3>Stack Tecnológico</h3>
            <div className="tech-carousel">
              <div className="tech-carousel-track">
                <div className="tech-item"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" title="Angular Moderno" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" title="React" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify" title="Shopify" /></div>
                <div className="tech-item"><img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" title="SQL" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" title="TypeScript" /></div>

                <div className="tech-item"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" title="Angular Moderno" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" title="React" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify" title="Shopify" /></div>
                <div className="tech-item"><img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" title="SQL" /></div>
                <div className="tech-item"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" title="TypeScript" /></div>
              </div>
            </div>
          </div>


        </div>

        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={perfilImg} alt="Meyer Restrepo Perfil" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
