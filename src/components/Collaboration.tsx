const collaborationData = [
  // ... (previous data)
  {
    id: 1,
    title: 'Shopify & Ecommerce',
    description: 'Transformo ideas en tiendas online de alto rendimiento. Desde la personalización total de temas hasta la optimización de la tasa de conversión.',
    services: ['Custom Themes', 'App Integrations', 'CRO optimization', 'Liquid Experts'],
    results: 'Tiendas rápidas, seguras y escalables que convierten visitantes en clientes.',
    icon: 'https://cdn.simpleicons.org/shopify/95BF47'
  },
  {
    id: 2,
    title: 'Aplicaciones Web',
    description: 'Especialista en interfaces modernas con Angular y React. Creo productos digitales robustos con un enfoque en la experiencia de usuario y el rendimiento.',
    services: ['Angular / React Apps', 'Progressive Web Apps', 'State Management', 'Complex Dashboards'],
    results: 'Productos digitales fluidos que ofrecen una experiencia excepcional en cualquier dispositivo.',
    icon: 'https://cdn.simpleicons.org/angular/DD0031'
  },
  {
    id: 3,
    title: 'Arquitectura & Datos',
    description: 'Diseño la lógica y las bases sobre las que corre tu negocio. Estructuró información para que sea accesible, segura y fácil de gestionar.',
    services: ['SQL / NoSQL Design', 'Rest API Development', 'Database Optimization', 'Data Security'],
    results: 'Sistemas backend consistentes que soportan el crecimiento de tu aplicación.',
    icon: 'https://img.icons8.com/color/48/000000/sql.png'
  },
  {
    id: 4,
    title: 'Soluciones a Medida',
    description: 'No creo en soluciones genéricas. Analizo tus necesidades técnicas para proponer el camino más eficiente hacia tus objetivos.',
    services: ['Technical Consultancy', 'Refactoring & Legacy', 'Clean Code Practices', 'Performance Audit'],
    results: 'Código mantenible y una hoja de ruta técnica clara para tu proyecto.',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6'
  }
];

export function Collaboration() {
  return (
    <section id="colaboracion" className="collaboration section-container">
      <div className="collaboration-header">
        <h2 className="section-title">Un poco de lo que <span>hago...</span></h2>
        <p className="section-subtitle">
          A continuación, te muestro un poco de lo que he desarrollado y algunas de las tecnologías que domino.
        </p>
      </div>

      <div className="collaboration-grid">
        {collaborationData.map((item) => (
          <div key={item.id} className="collaboration-card">
            <div className="card-top">
              <div className="card-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="card-title-area">
                <h3>{item.title}</h3>
                <div className="card-results-tag"><span>Resultados:</span> {item.results}</div>
              </div>
            </div>

            <div className="card-body">
              <p className="card-description">{item.description}</p>

              <div className="card-services">
                <div className="services-label">/// TECNOLOGÍAS & SERVICIOS</div>
                <div className="services-list">
                  {item.services.map((service, index) => (
                    <span key={index} className="service-badge">
                      &lt;{service} /&gt;
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-hover-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collaboration;
