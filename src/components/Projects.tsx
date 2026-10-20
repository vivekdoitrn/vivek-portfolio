import { PROJECTS } from '../data/projects'
import type { Project, RoadmapState } from '../data/projects'
import { Icon } from './Icon'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'

const STATE_LABEL: Record<RoadmapState, string> = {
  implemented: 'Implemented',
  'in-development': 'In development',
  planned: 'Planned',
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <article className={`project-card${featured ? ' is-featured' : ''}`}>
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt ?? `${project.title} preview`} loading="lazy" decoding="async" />
        ) : (
          <div className="vz-frame" aria-hidden="true">
            <ProjectVisual kind={project.visual} />
          </div>
        )}
        {project.visualCaption && <p className="visual-caption">{project.visualCaption}</p>}
      </div>

      <div className="project-body">
        <div className="project-meta">
          {project.inProgress ? (
            <span className="status status-live">
              <span className="status-dot" aria-hidden="true" />
              {project.status}
            </span>
          ) : (
            <span className="status status-done">{project.status}</span>
          )}
          <span className="project-tagline">{project.tagline}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {project.problem && (
          <div className="project-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
        )}

        {project.features && (
          <div className="project-block">
            <h4>Key features</h4>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.roadmap && (
          <div className="project-block">
            <h4>Feature status</h4>
            <ul className="direction-list">
              {project.roadmap.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <span className={`state state-${item.state}`}>{STATE_LABEL[item.state]}</span>
                </li>
              ))}
            </ul>
            <p className="roadmap-note">A part is only marked implemented once it is built and verified.</p>
          </div>
        )}

        {project.roadmap && project.techLabel && (
          <div className="project-block">
            <h4>{project.techLabel}</h4>
            <ul className="chips" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <li key={tech} className="chip chip-dashed">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!(project.roadmap && project.techLabel) && (
          <ul className="chips" aria-label={`${project.title} technologies`}>
            {project.tech.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {project.note && (
          <p className="project-note">
            {project.note.text}{' '}
            <a href={project.note.linkUrl} target="_blank" rel="noopener noreferrer">
              {project.note.linkLabel}
            </a>
            .
          </p>
        )}

        {(project.repoUrl || project.liveUrl) && (
          <div className="project-actions">
            {project.repoUrl && (
              <a className="btn btn-ghost btn-sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={16} />
                View on GitHub
                <span className="visually-hidden"> — {project.title} repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a className="btn btn-primary btn-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <Icon name="external" size={15} />
                <span className="visually-hidden"> — {project.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

/** The first two projects get the wide, two-column layout; the rest sit side by side. */
const FEATURED_COUNT = 2

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title" className="section-title">
            Things I’ve built.
          </h2>
          <p className="section-lead">
            Each project starts with a practical question. Links go to the real repositories; where there is no public
            link yet, there is no button.
          </p>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => {
            const featured = index < FEATURED_COUNT
            return (
              <Reveal
                key={project.id}
                delay={featured ? 0 : (index - FEATURED_COUNT) * 100}
                className={featured ? 'cell-wide' : ''}
              >
                <ProjectCard project={project} featured={featured} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
