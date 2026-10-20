/**
 * Single source of truth for personal details and links.
 * Edit values here; every button and link in the site reads from this file.
 */
export const SITE = {
  name: 'Vivek Ranjan Upadhyay',
  email: 'vrupadhyay2020@gmail.com',
  githubUrl: 'https://github.com/vivekdoitrn',
  // The "?isSelfProfile=true" query from the copied URL was removed; it only affects your own view.
  linkedinUrl: 'https://www.linkedin.com/in/vivek-ranjan-upadhyay-5446a5217/',
  // Google Drive share link. Must be shared as "Anyone with the link" for visitors to open it.
  resumeViewUrl: 'https://drive.google.com/file/d/1M_lFWt98pDCO1vkwq_cpPCi9QNjw4WEk/view?usp=sharing',
} as const

/** Turns a Drive "/file/d/<id>/view" link into a direct-download link; falls back to the view link. */
export function toDriveDownloadUrl(viewUrl: string): string {
  const match = viewUrl.match(/\/file\/d\/([^/?#]+)/)
  return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : viewUrl
}

export const RESUME_DOWNLOAD_URL = toDriveDownloadUrl(SITE.resumeViewUrl)

export const MAILTO_URL = `mailto:${SITE.email}?subject=${encodeURIComponent('Hello Vivek — from your portfolio')}`

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id)
