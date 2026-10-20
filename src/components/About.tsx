import { Icon } from './Icon'
import { Reveal } from './Reveal'

const FACTS: { label: string; values: string[] }[] = [
  {
    label: 'Degree',
    values: ['B.Tech, Computer Science and Engineering (Artificial Intelligence)'],
  },
  { label: 'College', values: ['Galgotias College of Engineering and Technology, Greater Noida'] },
  { label: 'University', values: ['Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU)'] },
  { label: 'Graduating', values: ['2027 (expected)'] },
  { label: 'Focus', values: ['Machine learning & AI · Python development · Data analytics'] },
  {
    label: 'Certified',
    values: ['NPTEL: Data Analytics with Python (Elite)', 'Internshala: Data Science with AI'],
  },
]

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">
            Where data meets software.
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={80}>
            <p>
              I’m a Machine Learning and Python developer and a B.Tech student in Computer Science and Engineering
              (Artificial Intelligence) at Galgotias College of Engineering and Technology, affiliated with AKTU,
              graduating in 2027. I’m most interested in the space between data and software: preparing and
              exploring data, engineering features, building models, and wrapping the results in tools people can
              actually use.
            </p>
            <p>
              Most of what I know comes from building. My work so far includes a Flask resume-screening app, a Tableau
              and Excel financial analytics dashboard, and PulseForge, a predictive-maintenance platform I’m
              currently building, which combines time-series machine learning, SHAP explainability and a RAG-powered
              assistant, all still in development. I’m looking for
              opportunities in data analytics, Python development and machine learning / AI.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <aside className="facts" aria-label="Quick facts">
              <div className="facts-head">
                <Icon name="graduation" size={18} />
                <span>At a glance</span>
              </div>
              <dl>
                {FACTS.map((fact) => (
                  <div key={fact.label} className="fact-row">
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.values.map((value) => (
                        <span key={value} className="fact-line">
                          {value}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
