const projectsData = [
  {
    id: 1,
    title: 'Libabu',
    description: 'Una plataforma estática interactiva concebida como una red social dedicada a los amantes de los libros. Interacciones y colección de obras literarias.',
    status: 'En curso',
    techs: ['Angular 18', 'TypeScript'],
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774582124/libabu_hwd94g.png',
    url: 'https://meyer-usuga.github.io/libabu/',
  },
  {
    id: 2,
    title: 'Web Ecommerce',
    description: 'Plataforma de comercio electrónico moderna y escalable. Cuenta con integración de Gemini IA para la optimización y generación inteligente de imágenes.',
    status: 'Terminado',
    techs: ['Angular 18', 'TypeScript', 'Gemini IA'],
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581752/web_ecommerce_yodj4n.png',
    url: 'https://web-ecommerce-tau.vercel.app/',
  },
  {
    id: 3,
    title: 'Saudi Tourism',
    description: 'Una experiencia visual inmersiva para promover el turismo en Arabia Saudita. Diseño de alta fidelidad con animaciones nativas y maquetación avanzada.',
    status: 'Terminado',
    techs: ['React 18', 'TypeScript', 'SCSS'],
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581753/saudi_tourism_dnidtx.png',
    url: 'https://meyer-usuga.github.io/saudi-tourism/',
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="projects section-container">
      <div className="projects-header">
        <h2 className="section-title">Diagrama de <span>Proyectos</span></h2>
        <p className="section-subtitle">Flujo cronológico y técnico de mi experiencia en desarrollo frontend.</p>
      </div>

      <div className="diagram-container">
        <div className="diagram-line"></div>
        {projectsData.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={project.id} className={`diagram-node ${isLeft ? 'left' : 'right'}`}>
              <div className="diagram-dot"></div>

              <div className="diagram-half card-half">
                <div className="diagram-connection-line"></div>

                <div className="diagram-card" onClick={() => window.open(project.url, '_blank')}>
                  <div className="diagram-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="diagram-image-overlay">
                      <a href="#" className="view-btn">Explorar Código / Demo</a>
                    </div>
                  </div>

                  <div className="diagram-info">
                    <div className="diagram-info-header">
                      <h3>{project.title}</h3>
                      <span className={`status-badge ${project.status === 'Terminado' ? 'done' : 'progress'}`}>
                        {project.status === 'Terminado' ? '● Terminado' : '◌ En curso'}
                      </span>
                    </div>

                    <p>{project.description}</p>

                    <div className="diagram-techs">
                      {project.techs.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          &lt;{tech} /&gt;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="diagram-half opposite-half">
                <span className="huge-number">0{index + 1}</span>
                <div className="opposite-details">
                  <span className="tech-count">[{project.techs.length} Tecnologías]</span>
                  <span className="status-label">/// {project.status.toUpperCase()}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
