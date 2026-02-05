export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Web Development',    desc: 'Responsive, accessible apps with modern frameworks.' },
  { icon: 'code-merge',   title: 'DevOps', desc: 'Automation, Deployment and CI/CD' },
  { icon: 'cloud-binary',  title: 'Cloud Enthusiast', desc: 'Honing skills in Azure and cloud based development ' },
];

export const STATS: Stat[] = [
  { value: '2+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '20+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '15+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];