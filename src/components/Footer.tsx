import { SITE } from '../data/site'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript and Vite.
        </p>
        <a className="to-top" href="#home">
          Back to top
          <Icon name="arrowUp" size={15} />
        </a>
      </div>
    </footer>
  )
}
