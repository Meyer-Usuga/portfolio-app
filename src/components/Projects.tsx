const projectsData = [
  {
    id: 0,
    title: 'Saudi Tourism',
    description: 'Una experiencia visual inmersiva para promover el turismo en Arabia Saudita. Diseño de alta fidelidad con animaciones nativas y maquetación avanzada.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581753/saudi_tourism_dnidtx.png',
    url: 'https://meyer-usuga.github.io/saudi-tourism/',
  },
  {
    id: 1,
    title: 'Web Ecommerce',
    description: 'Plataforma de comercio electrónico moderna y escalable. Cuenta con integración de Gemini IA para la optimización y generación inteligente de imágenes.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581752/web_ecommerce_yodj4n.png',
    url: 'https://web-ecommerce-tau.vercel.app/',
  },
  {
    id: 2,
    title: 'MatchMe',
    description: 'MatchMe es una aplicación web para analizar tu nivel de compatibilidad con vacantes y empresas.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1785889387/matchme_vhu7gu.png',
    url: 'https://match-me-green.vercel.app/home',
  },
  {
    id: 3,
    title: 'Mi Natillera',
    description: 'Landing page para una aplicación mobile. Enfocada en la comunidad colombiana para fomentar el ahorro de forma interactiva.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1784663202/webminatillera_pcobcb.png',
    url: 'https://mi-natillera-app.web.app/',
  },
  {
    id: 4,
    title: 'Libabu',
    description: 'Una plataforma estática interactiva concebida como una red social dedicada a los amantes de los libros. Interacciones y colección de obras literarias.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774582124/libabu_hwd94g.png',
    url: 'https://meyer-usuga.github.io/libabu/',
  },
];

export function Projects() {
  return (
    <section className="projects-section">
      <h3 className="section-title">Proyectos recientes</h3>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-project">
                Ir al sitio
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
