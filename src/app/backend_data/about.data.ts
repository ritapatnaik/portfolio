export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Web Development',    desc: 'Building responsive and accessible web applications using Angular, HTML, CSS, JavaScript, Bootstrap, and WordPress.' },
  { icon: 'code-merge',   title: 'Test Automation', desc: 'Developing JUnit test automation and improving application reliability through efficient testing practices.' },
  { icon: 'api',  title: 'API & Agile Practices', desc: 'REST API documentation with OpenAPI (Swagger), technical documentation in Confluence, and experience working in Agile/Scrum teams.' },
];

export const STATS: Stat[] = [
  { value: '2+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  // { value: '20+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '15+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];