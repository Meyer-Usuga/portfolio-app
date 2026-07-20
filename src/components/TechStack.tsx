const techs = [
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/111827' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' }
];

export function TechStack() {
  return (
    <section className="tech-stack-section">
      <h3 className="section-title">Current tech stack</h3>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon">
              <img src={tech.icon} alt={tech.name} />
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
