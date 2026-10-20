import { useEffect, useRef, useState } from 'react'
import { MAILTO_URL, RESUME_DOWNLOAD_URL, SITE } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

type CopyState = 'idle' | 'copied' | 'failed'

export function Contact() {
  const [copy, setCopy] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copyEmail() {
    let next: CopyState = 'copied'
    try {
      await navigator.clipboard.writeText(SITE.email)
    } catch {
      next = 'failed'
    }
    setCopy(next)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopy('idle'), 2200)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title contact-title">
              Let’s talk.
            </h2>
            <p className="section-lead">
              If you’re hiring for data analytics, Python or machine learning work, or want to discuss one of my
              projects, email is the quickest way to reach me.
            </p>

            <div className="email-row">
              <a className="email-link" href={MAILTO_URL}>
                {SITE.email}
              </a>
              <button type="button" className="copy-button" onClick={copyEmail}>
                <Icon name={copy === 'copied' ? 'check' : 'copy'} size={15} />
                {copy === 'copied' ? 'Copied' : copy === 'failed' ? 'Copy failed' : 'Copy'}
                <span className="visually-hidden"> email address</span>
              </button>
              <span className="visually-hidden" role="status" aria-live="polite">
                {copy === 'copied' ? 'Email address copied to clipboard' : copy === 'failed' ? 'Could not copy the email address' : ''}
              </span>
            </div>

            <div className="contact-actions">
              <a className="btn btn-primary" href={MAILTO_URL}>
                <Icon name="mail" size={18} />
                Email Me
              </a>
              <a className="btn btn-ghost" href={RESUME_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="download" size={18} />
                Download Resume
              </a>
            </div>

            <ul className="contact-links" aria-label="Profiles">
              <li>
                <a className="social-link" href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" size={18} />
                  github.com/vivekdoitrn
                </a>
              </li>
              <li>
                <a className="social-link" href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" size={17} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
