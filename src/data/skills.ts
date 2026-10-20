import type { IconName } from '../components/Icon'

export interface Skill {
  name: string
  /** Core skills are shown with more emphasis. Everything else is deliberately quieter. */
  core?: boolean
}

export interface SkillGroup {
  id: string
  title: string
  icon: IconName
  blurb: string
  /** Width on the 12-column desktop grid. */
  span: 4 | 5 | 6 | 7
  skills: Skill[]
}

/** Mirrors the resume's skills section. Only list tools you have actually used. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming & CS Fundamentals',
    icon: 'code',
    blurb: 'Python and SQL are my primary working languages.',
    span: 5,
    skills: [
      { name: 'Python', core: true },
      { name: 'SQL', core: true },
      { name: 'C++' },
      { name: 'C' },
      { name: 'DSA' },
      { name: 'OOP' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: 'chart',
    blurb: 'Cleaning, exploring and communicating data with code and BI tools.',
    span: 7,
    skills: [
      { name: 'Pandas', core: true },
      { name: 'NumPy', core: true },
      { name: 'Exploratory Data Analysis', core: true },
      { name: 'Data Visualization', core: true },
      { name: 'Tableau', core: true },
      { name: 'Statistical Analysis' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Power BI' },
      { name: 'Excel' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'cpu',
    blurb: 'Predictive modelling, NLP and explainability, from preprocessing through to model development.',
    span: 7,
    skills: [
      { name: 'Machine Learning', core: true },
      { name: 'Scikit-learn', core: true },
      { name: 'XGBoost' },
      { name: 'PyTorch' },
      { name: 'SHAP' },
      { name: 'Anomaly Detection' },
      { name: 'Time Series Analysis' },
      { name: 'NLP' },
      { name: 'spaCy' },
      { name: 'pdfplumber' },
      { name: 'RAG' },
    ],
  },
  {
    id: 'backend',
    title: 'Apps & APIs',
    icon: 'server',
    blurb: 'Small web apps and services in Python.',
    span: 5,
    skills: [{ name: 'Flask', core: true }, { name: 'FastAPI' }, { name: 'Streamlit' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    blurb: 'Relational data and SQL querying.',
    span: 6,
    skills: [{ name: 'MySQL', core: true }],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: 'wrench',
    blurb: 'Everyday tooling for version control, notebooks, editing and containers.',
    span: 6,
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Jupyter Notebook' }, { name: 'VS Code' }, { name: 'Docker' }],
  },
]
