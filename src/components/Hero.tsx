import { SITE } from '../data/site'
import { HeroVisual } from './HeroVisual'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <p className="pill">
              <span className="pill-dot" aria-hidden="true" />
              B.Tech CSE (AI) · Graduating 2027
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-name">{SITE.name}</span>
              <span className="hero-headline">
                Building <span className="nowrap">end-to-end</span> <em>machine learning</em> and data solutions with Python.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-lead">
              I’m a Machine Learning and Python developer who builds predictive, NLP and data-driven applications, from
              data preprocessing and feature engineering through to model development and AI-powered tools.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Projects
                <Icon name="arrowRight" size={18} />
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="hero-links" aria-label="Profiles">
              <li>
                <a className="social-link" href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" size={18} />
                  GitHub
                </a>
              </li>
              <li>
                <a className="social-link" href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" size={17} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual-wrap">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
