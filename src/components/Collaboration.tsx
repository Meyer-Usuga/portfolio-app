import React from 'react';

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

const benefitsData = [
  {
    id: 1,
    title: 'Escalabilidad Total',
    description: 'Arquitecturas pensadas para crecer sin comprometer el rendimiento.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' // Lightning icon
  },
  {
    id: 2,
    title: 'Optimización SEO/Perf',
    description: 'Carga ultrarrápida para enamorar a Google y a tus usuarios.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' // Chart icon
  },
  {
    id: 3,
    title: 'Clean Code',
    description: 'Código robusto, documentado y fácil de mantener a largo plazo.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' // Code icon
  },
  {
    id: 4,
    title: 'UX/UI de Vanguardia',
    description: 'Interfaces intuitivas que priorizan la experiencia del usuario.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' // Heart icon
  }
];

export function Collaboration() {
  return (
    <section id="colaboracion" className="collaboration section-container">
      <div className="collaboration-header">
        <h2 className="section-title">Hagamos algo <span>juntos!</span></h2>
        <p className="section-subtitle">
          Explora cómo podemos potenciar tu proyecto combinando estrategia técnica y diseño de vanguardia.
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

      <div className="benefits-section">
        <h3 className="benefits-title">¿Por qué trabajar conmigo?</h3>
        <div className="benefits-grid">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="collaboration-footer">
        <a href="mailto:tuemail@ejemplo.com" className="cta-button">
          Iniciar un Proyecto
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
}

export default Collaboration;
