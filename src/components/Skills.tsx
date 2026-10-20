import { SKILL_GROUPS } from '../data/skills'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title">
            Tools I work with.
          </h2>
          <p className="section-lead">
            Grouped by how I use them. The ones I reach for most are marked; there are no ratings because a number says
            little about real ability.
          </p>
          <p className="legend" aria-hidden="true">
            <span className="legend-dot" /> Used most
          </p>
        </Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={(index % 2) * 80} className={`skill-cell span-${group.span}`}>
              <article className="skill-card">
                <header className="skill-head">
                  <span className="skill-icon">
                    <Icon name={group.icon} size={18} />
                  </span>
                  <h3>{group.title}</h3>
                </header>
                <p className="skill-blurb">{group.blurb}</p>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className={skill.core ? 'skill is-core' : 'skill'}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
