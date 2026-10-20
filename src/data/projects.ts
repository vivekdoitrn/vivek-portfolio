/**
 * Project content. Everything on the project cards comes from this file.
 * Source of truth: the resume (PulseForge, SmartHIRE, Financial Analytics Dashboard) plus the
 * Netflix Watch Analysis project, which is kept deliberately as evidence of SQL + Tableau work.
 *
 * - Add `repoUrl` to show a "View on GitHub" button. Leave it out and no button appears.
 * - Add `liveUrl` ONLY for a real, deployed demo. Leave it out and no "Live Demo" button appears.
 * - Add `image` (a file in /public, e.g. "/projects/netflix.png") to show a real screenshot
 *   instead of the illustration. Provide `imageAlt` too.
 * - `roadmap` is for projects that are not finished. Mark a part 'implemented' only once it is built
 *   and verified; use 'in-development' while you are working on it and 'planned' if you have not started.
 */

export type VisualKind = 'matching' | 'netflix' | 'finance' | 'maintenance'

export type RoadmapState = 'implemented' | 'in-development' | 'planned'

export interface Project {
  id: string
  title: string
  tagline: string
  status: string
  /** Shows the pulsing "in progress" badge style instead of the "completed" one. */
  inProgress?: boolean
  description: string
  problem?: string
  features?: string[]
  roadmap?: { label: string; state: RoadmapState }[]
  tech: string[]
  techLabel?: string
  visual: VisualKind
  visualCaption?: string
  repoUrl?: string
  liveUrl?: string
  image?: string
  imageAlt?: string
  note?: { text: string; linkLabel: string; linkUrl: string }
}

export const PROJECTS: Project[] = [
  {
    id: 'pulseforge',
    title: 'PulseForge',
    tagline: 'Predictive maintenance & equipment intelligence',
    status: 'In Progress',
    inProgress: true,
    description:
      'A predictive-maintenance platform for machine sensor time-series data. It aims to detect anomalies, estimate equipment failure risk, and explain which sensor factors drive each prediction. The project is still under development, and each part below is labelled with its real status.',
    roadmap: [
      { label: 'Time-series feature engineering and anomaly detection', state: 'in-development' },
      { label: 'Equipment failure-risk prediction with ML models', state: 'in-development' },
      { label: 'Risk scoring with SHAP-based explanations of failure drivers', state: 'in-development' },
      { label: 'RAG-powered maintenance assistant served through FastAPI', state: 'in-development' },
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'PyTorch', 'Pandas', 'NumPy', 'SHAP', 'RAG', 'FastAPI', 'SQL', 'Streamlit', 'Docker'],
    techLabel: 'Tech stack (in development)',
    visual: 'maintenance',
    visualCaption: 'Concept illustration, not output from the project',
    // repoUrl: 'https://github.com/vivekdoitrn/<repository-name>',   // add when the repository exists
  },
  {
    id: 'smarthire',
    title: 'SmartHIRE',
    tagline: 'Resume screening & job matching',
    status: 'Completed',
    description:
      'A Flask web app that reads a PDF resume, extracts skills and compares them with a pasted job description, then shows which required skills matched, which are missing, and an overall match score.',
    problem:
      'Checking resumes against a job description by hand is slow, and opaque scores are hard to explain to a hiring manager.',
    features: [
      'Upload a PDF resume and paste any job description',
      'One shared skill vocabulary, matched case-insensitively with boundary-aware regex (so “Java” does not match “JavaScript”)',
      'Results page with required, matched and missing skills plus a match score',
      'Rule-based and explainable by design: it is not semantic matching',
    ],
    tech: ['Python', 'Flask', 'pdfplumber', 'Regex', 'HTML', 'CSS'],
    visual: 'matching',
    repoUrl: 'https://github.com/vivekdoitrn/SmartHIRE',
    note: {
      text: 'Built on an open-source Flask resume-screening project and extended with dynamic job descriptions, shared skill matching and a redesigned interface. Original:',
      linkLabel: 'AshutoshPant128/AI-Based-Resume-Screening-System-Using-Python-NLP-Flask',
      linkUrl: 'https://github.com/AshutoshPant128/AI-Based-Resume-Screening-System-Using-Python-NLP-Flask',
    },
  },
  {
    id: 'finance',
    title: 'Financial Analytics Dashboard',
    tagline: 'Tableau + Excel',
    status: 'Completed',
    description:
      'An interactive Tableau dashboard, backed by Excel analysis, that explores financial data and makes client and time-based trends easy to compare.',
    problem: 'Financial records are dense; a dashboard makes balances, interest rates and client behaviour easier to compare.',
    features: [
      'Trends in outstanding balances and interest rates',
      'Client-level financial performance analysis',
      'Interactive filters and comparative visualizations',
      'Client and time-based trend views',
    ],
    tech: ['Tableau', 'Excel', 'Data analysis', 'Data visualization'],
    visual: 'finance',
    // repoUrl: 'https://github.com/vivekdoitrn/<repository-name>',   // add when published
    // liveUrl: 'https://public.tableau.com/<dashboard-url>',          // add when published
  },
  {
    id: 'netflix',
    title: 'Netflix Watch Analysis',
    tagline: 'SQL + Tableau',
    status: 'Completed',
    description:
      'An analysis of my own Netflix viewing history, using SQL to join it with title data and a single-page Tableau dashboard to show genre mix, movies versus series, and viewing frequency.',
    features: [
      'SQL joins between viewing history and title data',
      'Genre and movie-versus-series analysis',
      'Viewing-frequency patterns in a Tableau dashboard',
    ],
    tech: ['SQL', 'Tableau', 'Data analysis', 'Data visualization'],
    visual: 'netflix',
    repoUrl: 'https://github.com/vivekdoitrn/Netflix-Watch-Analysis',
  },
]
