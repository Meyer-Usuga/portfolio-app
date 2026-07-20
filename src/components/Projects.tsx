const projectsData = [
  {
    id: 1,
    title: 'Libabu',
    description: 'Una plataforma estática interactiva concebida como una red social dedicada a los amantes de los libros. Interacciones y colección de obras literarias.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774582124/libabu_hwd94g.png',
    url: 'https://meyer-usuga.github.io/libabu/',
  },
  {
    id: 2,
    title: 'Web Ecommerce',
    description: 'Plataforma de comercio electrónico moderna y escalable. Cuenta con integración de Gemini IA para la optimización y generación inteligente de imágenes.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581752/web_ecommerce_yodj4n.png',
    url: 'https://web-ecommerce-tau.vercel.app/',
  },
  {
    id: 3,
    title: 'Saudi Tourism',
    description: 'Una experiencia visual inmersiva para promover el turismo en Arabia Saudita. Diseño de alta fidelidad con animaciones nativas y maquetación avanzada.',
    image: 'https://res.cloudinary.com/db1tp6eqg/image/upload/v1774581753/saudi_tourism_dnidtx.png',
    url: 'https://meyer-usuga.github.io/saudi-tourism/',
  }
];

export function Projects() {
  return (
    <section className="projects-section">
      <h3 className="section-title">Recent projects</h3>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
